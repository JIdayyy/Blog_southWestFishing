import prisma from "../prisma/client";
import Main from "@components/Main";
import { GetStaticPropsResult } from "next";
import React from "react";
import { Comment, Picture, Post, User } from ".prisma/client";
import Column from "@components/Main/Column";

export type PostWithAuthorAndPictures = Post & {
    picture: Picture[];
    author: User;
    comments: Comment[];
};

type IProps = {
    posts: PostWithAuthorAndPictures[];
};

export function Home(props: IProps): JSX.Element {
    console.log(props);

    return (
        <div className="w-full scrollbar scrollbar-thumb-gray-900 mt-20 scrollbar-track-gray-800 min-h-full flex h-full">
            <div className="bg-gray-200 flex items-start align-middle justify-around w-full h-full">
                <Main posts={props.posts} />
                <Column />
            </div>
        </div>
    );
}
export async function getStaticProps(): Promise<GetStaticPropsResult<IProps>> {
    const posts = await prisma.post.findMany({
        include: {
            picture: true,
            author: true,
            comments: true,
        },
    });
    await prisma.$disconnect();
    return {
        props: { posts },
    };
}
export default Home;
