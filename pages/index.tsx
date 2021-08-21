import prisma from "../prisma/client";
import Header from "@components/Header";
import Main from "@components/Main";
import Column from "@components/Main/Column";
import { GetStaticPropsResult } from "next";
import React from "react";
import { Picture, Post, User } from ".prisma/client";

export type PostWithAuthorAndPictures = Post & {
    picture: Picture[];
    author: User;
};

type IProps = {
    posts: PostWithAuthorAndPictures[];
};

export function Home(props: IProps): JSX.Element {
    console.log(props);

    return (
        <div
            style={{ backgroundColor: "black" }}
            className="w-screen min-h-full flex flex-col bg-black"
        >
            <Header />
            <div className=" flex lg:flex-row flex-col my-48 w-full items-start align-middle  justify-around">
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
    console.log(posts);
    return {
        props: { posts },
    };
}
export default Home;
