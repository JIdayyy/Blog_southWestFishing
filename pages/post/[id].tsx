import prisma from "../../prisma/client";
import { GetStaticPropsResult } from "next";
import getAllPostIds from "../../lib/getAllPostIds";

import { PostWithAuthorAndPictures } from "pages";
import Image from "next/image";
type IProps = {
    post: PostWithAuthorAndPictures;
};
export default function article(props: IProps): JSX.Element {
    console.log(props);

    return (
        <div className="w-full lg:w-6/12 mt-88 h-full flex flex-col item-center align-middle justify-center text-white">
            {props.post.picture[0].url && (
                <Image
                    src={props.post.picture[0].url}
                    width={300}
                    height={300}
                    layout="responsive"
                    className="rounded-6"
                />
            )}
            <div className="w-full flex flex-col">
                <div className="text-xl font-700">{props.post.title}</div>
                <div className="text-10 font-200">{props.post.content}</div>
            </div>
        </div>
    );
}

export async function getStaticProps(params: {
    params: {
        id: string;
    };
}): Promise<GetStaticPropsResult<IProps>> {
    const { id } = params.params;

    const post = await prisma.post.findUnique({
        where: {
            id: id,
        },
        include: {
            picture: true,
            author: true,
        },
        rejectOnNotFound: true,
    });
    return {
        props: {
            post,
        },
    };
}

export async function getStaticPaths(): Promise<{
    paths: { params: { id: string } }[];
    fallback: boolean;
}> {
    const paths = await getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}
