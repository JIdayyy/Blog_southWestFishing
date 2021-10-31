import type { NextApiRequest, NextApiResponse } from "next";
import { Post } from ".prisma/client";
import post from "../../../src/RESOLVERS/posts/posts";

const SinglePostHandler = (
    req: NextApiRequest,
    res: NextApiResponse<Post | Post[] | Error | null>,
): Promise<void> => {
    if (req.method === "DELETE") {
        const { id } = req.query;

        return post.deletePost(req, res, id);
    }
    if (req.method === "GET") {
        return post.getOne(req, res);
    }
    throw new Error("Method not allowed");
};
export default SinglePostHandler;
