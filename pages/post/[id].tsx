import prisma from "../../prisma/client";
import { GetStaticPropsResult } from "next";
import getAllPostIds from "../../lib/getAllPostIds";
import { Post } from ".prisma/client";
type IProps = {
    post: Post;
};
export default function article(props: IProps): JSX.Element {
    console.log(props);

    return <div className="text-white">{props.post.id}</div>;
}

export async function getStaticProps(params: {
    params: {
        id: string;
    };
}): Promise<GetStaticPropsResult<IProps>> {
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
