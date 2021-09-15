import { Post } from ".prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import post from "../../../src/RESOLVERS/posts/posts";

export default async function userHandler(
    req: NextApiRequest,
    res: NextApiResponse<Post | Post[] | Error | null>,
): Promise<void> {
    if (req.method === "DELETE") {
        const { id } = req.query;
        console.log("delete");
        return post.deletePost(req, res, id);
    }
}
