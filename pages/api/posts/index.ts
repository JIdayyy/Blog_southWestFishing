import type { NextApiRequest, NextApiResponse } from "next";
import { Post } from ".prisma/client";
import post from "../../../src/RESOLVERS/posts/posts";

export default async function PostHandler(
    req: NextApiRequest,
    res: NextApiResponse<Post | Post[] | Error>,
): Promise<void> {
    if (req.method === "POST") {
        return post.create(req, res);
    }
    if (req.method === "GET") {
        return post.get(req, res);
    }
    throw new Error("Method not allowed");
}
