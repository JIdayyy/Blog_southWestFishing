import { GetStaticPropsResult } from "next";
import { PostWithAuthorAndPictures } from "pages";
import Article from "@components/Post/Article";
import getAllPostIds from "../../lib/getAllPostIds";
import prisma from "../../prisma/client";

type IProps = {
    post: PostWithAuthorAndPictures;
};

export default function ArticlePage(props: IProps): JSX.Element {
    const { post } = props;
    return <Article article={post} />;
}

export async function getStaticProps(params: {
    params: {
        id: string;
    };
}): Promise<GetStaticPropsResult<IProps>> {
    const { id } = params.params;

    const post = await prisma.post.findUnique({
        where: {
            id,
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
        revalidate: 120,
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
