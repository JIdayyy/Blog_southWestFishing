import Main from "@components/Main";
import { GetStaticPropsResult } from "next";
import React from "react";
import Column from "@components/Main/Column";
import { Post } from "schema";

type IProps = {
    posts: Post[];
};

export function Home(props: IProps): JSX.Element {
    const { posts } = props;
    console.log(posts);
    return (
        <div className="w-full scrollbar scrollbar-thumb-gray-900 mt-20 scrollbar-track-gray-800 min-h-full flex h-full">
            <div className="bg-gray-200 flex items-start align-middle justify-around w-full h-full">
                <Main posts={posts} />
                <Column />
            </div>
        </div>
    );
}

export const getStaticProps = async (): Promise<
    GetStaticPropsResult<IProps>
> => {
    const query = encodeURIComponent(
        `*[ _type == "post"]{ _id, slug, body, title, mainImage , publishedAt ,  author-> } `,
    );
    const tarifsQuery = encodeURIComponent(
        `*[ _type == "tarif"]{ name, slug, value, tarifCategory-> } `,
    );
    const tarifUrl = `https://hjbcv9e5.api.sanity.io/v1/data/query/production/?query=${tarifsQuery}`;
    const tarifResults = await fetch(tarifUrl).then((r) => r.json());
    const url = `https://hjbcv9e5.api.sanity.io/v1/data/query/production/?query=${query}`;
    const result = await fetch(url).then((r) => r.json());
    const posts = result.result;
    console.log("tarifs", tarifResults.result);
    if (!posts) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            posts,
        },
    };
};

export default Home;
