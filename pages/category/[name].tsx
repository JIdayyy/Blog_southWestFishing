import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import { useQuery } from "react-query";
import AXIOS from "src/utils/AXIOS";

interface Props {}

export default function Category({}: Props): ReactElement {
    const { query } = useRouter();
    const { data, isLoading, error } = useQuery("getPostsByCategory", () =>
        AXIOS.get(`/categories/${query.name}`),
    );
    return <div>{query.name}</div>;
}
