import { Comment } from ".prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import comment from "../RESOLVERS/comments/comment";

const allowCors = (fn: any) => async (req, res: any) => {
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "DELETE");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
    );
    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }
    return await fn(req, res);
};

async function commentHandler(
    req: NextApiRequest,
    res: NextApiResponse<Comment | Comment[] | Error | null>,
): Promise<void> {
    if (req.method === "DELETE") {
        const { id } = req.query;

        console.log("delete");
        return comment.delete(req, res, id);
    }
}
module.exports = allowCors(commentHandler);
