import React, { ReactElement } from "react";
import BlockContent from "@sanity/block-content-to-react";
import Article from "@components/Post/Article";

import { createImageUrlBuilder } from "next-sanity";

interface Props {}

const imageBuilder = (source) => createImageUrlBuilder(config).image(source);

const config = {
    dataset: "production",
    projectId: "tan4j66r",
    useCdn: "production",
};

export default function SanityPost({
    title,
    body,
    image,
}: Props): ReactElement {
    console.log(title, body, image);

    return (
        <div className="w-full h-full flex items-center flex-col justify-start">
            <div className="bg-gray-200 shadow-10 w-1/2">
                <div className="font-bold text-40">{title}</div>
                <img
                    width={1240}
                    height={540}
                    alt={`Cover  for ${title}`}
                    className="hover:shadow-medium transition-shadow duration-200"
                    src={
                        imageBuilder(image)
                            .width(1240)
                            .height(540)
                            .url() as string
                    }
                />
                <BlockContent
                    blocks={body}
                    projectId="tan4j66r"
                    dataset="southwestfishing"
                />
            </div>
        </div>
    );
}

export const getServerSideProps = async (context) => {
    const pageSlug = context.query.slug;
    if (!pageSlug) {
        return {
            notFound: true,
        };
    }
    const query = encodeURIComponent(
        `*[ _type == "post" && slug.current == "${pageSlug}" ]`,
    );
    const url = `https://tan4j66r.api.sanity.io/v1/data/query/production/?query=${query}`;
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
            image: post.image,
        },
    };
};
