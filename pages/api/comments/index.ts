import type { NextApiRequest, NextApiResponse } from "next";
import comment from "../RESOLVERS/comments/comment";
import { Comment } from ".prisma/client";

const allowCors =
    (fn: (req: any, res: any) => void) => async (req: any, res: any) => {
        res.setHeader("Access-Control-Allow-Credentials", true);
        res.setHeader("Access-Control-Allow-Origin", "*");
        // another common pattern
        // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader("Access-Control-Allow-Methods", "POST, GET");
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
    res: NextApiResponse<Comment | Comment[] | Error>,
): Promise<void> {
    if (req.method === "POST") {
        return comment.create(req, res);
    }
    if (req.method === "GET") {
        return comment.get(req, res);
    }
}
module.exports = allowCors(commentHandler);
