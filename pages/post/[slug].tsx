import React, { ReactElement } from "react";
import SanityBlockContent from "@sanity/block-content-to-react";
import Image from "next/image";
import { createImageUrlBuilder } from "next-sanity";
import { GetStaticPropsResult } from "next";
import { Post } from "schema";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import getAllSanityPostIds from "lib/getAllSanityPostIds";

interface IProps {
    body: Post["body"];
    image: Post["mainImage"];
    title: Post["title"];
}

const config = {
    dataset: "production",
    projectId: "hjbcv9e5",
    useCdn: "production",
};

const imageBuilder = (source: SanityImageSource) =>
    createImageUrlBuilder(config).image(source);

export default function SanityPost(props: IProps): ReactElement {
    const { body, title, image } = props;

    const mainImage = imageBuilder(image as SanityImageSource)
        .width(1240)
        .height(540)
        .url() as string;

    return (
        <div className="w-full h-full flex items-center flex-col justify-start">
            <div className="bg-gray-200 w-1/2">
                <div className="font-bold text-40">{title}</div>
                <Image
                    src={mainImage}
                    placeholder="blur"
                    blurDataURL={mainImage}
                    width={1240}
                    height={540}
                />
                <SanityBlockContent
                    blocks={body}
                    projectId="hjbcv9e5"
                    dataset="production"
                />
            </div>
        </div>
    );
}

export async function getStaticPaths(): Promise<{
    paths: { params: { slug: string } }[];
    fallback: boolean;
}> {
    const paths = await getAllSanityPostIds();
    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps = async (params: {
    params: {
        slug: string;
    };
}): Promise<GetStaticPropsResult<IProps>> => {
    const { slug } = params.params;

    if (!slug) {
        return {
            notFound: true,
        };
    }

    const query = encodeURIComponent(
        `*[ _type == "post" && slug.current == "${slug}" ]`,
    );

    const url = `https://hjbcv9e5.api.sanity.io/v1/data/query/production/?query=${query}`;

    const result = await fetch(url).then((r) => r.json());

    const post = result.result[0];

    if (!post) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            body: post.body,
            title: post.title,
            image: post.mainImage,
        },
    };
};
