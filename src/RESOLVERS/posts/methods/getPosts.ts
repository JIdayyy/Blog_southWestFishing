import { Post } from ".prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";

export default async function getUsers(
    req: NextApiRequest,
    res: NextApiResponse<Post[] | Error>,
): Promise<void> {
    try {
        const posts = await prisma.post.findMany();
        res.status(200).json(posts);
    } catch (error: unknown) {
        res.status(500).json({
            name: "Error",
            message: error as string,
        });
    }
}
