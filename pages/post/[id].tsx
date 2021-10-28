import prisma from "../../prisma/client";
import { GetStaticPropsResult } from "next";
import getAllPostIds from "../../lib/getAllPostIds";
import { PostWithAuthorAndPictures } from "pages";
import Article from "@components/Post/Article";

type IProps = {
    post: PostWithAuthorAndPictures;
};

export default function ArticlePage(props: IProps): JSX.Element {
    return <Article article={props.post} />;
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
            comments: true,
        },
        rejectOnNotFound: true,
    });
    return {
        props: {
            post,
        },
        revalidate: 1,
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
