import { Comment } from ".prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import comment from "../../../src/RESOLVERS/comments/comment";

export default async function commentHandler(
    req: NextApiRequest,
    res: NextApiResponse<Comment | Comment[] | Error | null>,
): Promise<void> {
    if (req.method === "DELETE") {
        const { id } = req.query;

        console.log("delete");
        return comment.delete(req, res, id);
    }
}
