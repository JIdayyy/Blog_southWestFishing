import type { NextApiRequest, NextApiResponse } from "next";
import comment from "../../../src/RESOLVERS/comments/comment";
import { Comment } from ".prisma/client";
import category from "src/RESOLVERS/categories/category";

export default async function CategoryHandler(
    req: NextApiRequest,
    res: NextApiResponse<Comment | Comment[] | Error>,
): Promise<void> {
    if (req.method === "POST") {
        return comment.create(req, res);
    }
    if (req.method === "GET") {
        return category.getAll(req, res);
    }
    throw new Error("Method not allowed");
}
