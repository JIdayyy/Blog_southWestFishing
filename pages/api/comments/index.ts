import type { NextApiRequest, NextApiResponse } from "next";
import comment from "./RESOLVERS/comment";

interface Data {
    id: string;
    content: string;
    postId: string;
    createdAt: Date;
    email: string;
}

export default async function commentHandler(
    req: NextApiRequest,
    res: NextApiResponse<Data | Data[] | Error>,
): Promise<void> {
    if (req.method === "POST") {
        return comment.create(req, res);
    }
    if (req.method === "GET") {
        return comment.get(req, res);
    }
}
