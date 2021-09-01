import type { NextApiRequest, NextApiResponse } from "next";
import comment from "../RESOLVERS/comments/comment";
import Cors from "cors";
interface Data {
    id: string;
    content: string;
    postId: string;
    createdAt: Date;
    email: string;
}
const cors = Cors({
    methods: ["GET", "POST"],
});

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }

            return resolve(result);
        });
    });
}
export default async function commentHandler(
    req: NextApiRequest,
    res: NextApiResponse<Data | Data[] | Error>,
): Promise<void> {
    await runMiddleware(req, res, cors);
    if (req.method === "POST") {
        return comment.create(req, res);
    }
    if (req.method === "GET") {
        return comment.get(req, res);
    }
}
