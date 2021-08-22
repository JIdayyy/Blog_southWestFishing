import { Post } from ".prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import post from "../RESOLVERS/posts/posts";

export default async function postHandler(
    req: NextApiRequest,
    res: NextApiResponse<Post | Post[] | Error>,
): Promise<void> {
    if (req.method === "POST") {
        return post.create(req, res);
    }
    if (req.method === "GET") {
        return post.get(req, res);
    }
}
