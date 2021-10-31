import type { NextApiRequest, NextApiResponse } from "next";
import comment from "../../../src/RESOLVERS/comments/comment";
import { Comment } from ".prisma/client";

export default async function CommentHandler(
    req: NextApiRequest,
    res: NextApiResponse<Comment | Comment[] | Error>,
): Promise<void> {
    if (req.method === "POST") {
        return comment.create(req, res);
    }
    if (req.method === "GET") {
        return comment.get(req, res);
    }
    throw new Error("Method not allowed");
}
