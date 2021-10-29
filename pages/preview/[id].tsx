import Article from "@components/Post/Article";
import axios from "axios";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import { useQuery } from "react-query";

const URL = process.env.NEXT_PUBLIC_API_URL;

export default function Preview(): ReactElement {
    const { query } = useRouter();

    const { data, isLoading, error } = useQuery(
        "getArticlePreview",
        () => axios.get(`${URL}posts/${query.id}`).then((r) => r.data),
        {
            enabled: !!query.id,
        },
    );

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error</div>;
    if (!data) return <div>No data</div>;
    return (
        <div className="w-full min-h-screen h-screen flex flex-col items-center justify-center">
            <Article article={data} preview />
        </div>
    );
}
