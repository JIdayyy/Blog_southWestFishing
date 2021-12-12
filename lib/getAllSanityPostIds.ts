/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Post } from "schema";

async function getAllSanityPostIds(): Promise<{ params: { slug: string } }[]> {
    const query = encodeURIComponent(`*[ _type == "post" ]`);

    const url = `https://hjbcv9e5.api.sanity.io/v1/data/query/production/?query=${query}`;
    const result = await fetch(url).then((r) => r.json());

    const posts = result.result;

    if (posts.length === 0 || posts === undefined) {
        return [
            {
                params: {
                    slug: "",
                },
            },
        ];
    }

    const paths = posts.map((post: Post) => ({
        params: {
            slug: post.slug!.current,
        },
    }));

    return paths;
}

export default getAllSanityPostIds;
