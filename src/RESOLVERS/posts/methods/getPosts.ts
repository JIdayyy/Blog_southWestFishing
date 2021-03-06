import { NextApiRequest, NextApiResponse } from "next";
import { Post } from ".prisma/client";
import prisma from "../../../../prisma/client";

export default async function getPosts(
    req: NextApiRequest,
    res: NextApiResponse<Post[] | Error>,
): Promise<void> {
    try {
        const posts = await prisma.post.findMany();
        await prisma.$disconnect();
        res.status(200).json(posts);
    } catch (error: unknown) {
        res.status(500).json({
            name: "Error",
            message: error as string,
        });
    }
}
