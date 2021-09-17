import prisma from "../prisma/client";
import Main from "@components/Main";
import { GetStaticPropsResult } from "next";
import React from "react";
import { Comment, Picture, Post, User } from ".prisma/client";

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
        <div
            style={{ backgroundColor: "black" }}
            className="lg:w-6/12 w-full min-h-full flex flex-col bg-black"
        >
            <div className=" flex w-full h-full">
                <Main posts={props.posts} />
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

    return {
        props: { posts },
    };
}
export default Home;
