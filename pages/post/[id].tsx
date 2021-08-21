import prisma from "../../prisma/client";
import { GetStaticPropsResult } from "next";

import getAllPostIds from "../../lib/getAllPostIds";
import { Post } from ".prisma/client";
import { AppContext } from "next/app";
import { Params } from "next/dist/next-server/server/router";
type IProps = {
    post: Post;
};
export default function article(props: IProps): JSX.Element {
    console.log(props);

    return <div className="text-white">{props.post.id}</div>;
}

export async function getStaticProps(
    params: Params,
): Promise<GetStaticPropsResult<IProps>> {
    const { id } = params.params;
    console.log(id);
    const post = await prisma.post.findUnique({
        where: {
            id: id,
        },
        rejectOnNotFound: true,
    });
    return {
        props: {
            post,
        },
    };
}

export async function getStaticPaths() {
    const paths = await getAllPostIds();
    console.log(paths);
    return {
        paths,
        fallback: false,
    };
}
