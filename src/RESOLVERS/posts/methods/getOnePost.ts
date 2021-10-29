import { NextApiRequest, NextApiResponse } from "next";
import { Post } from ".prisma/client";
import prisma from "../../../../prisma/client";

export default async function getOnePost(
    req: NextApiRequest,
    res: NextApiResponse<Post | Error>,
): Promise<void> {
    try {
        const post = await prisma.post.findUnique({
            where: {
                id: req.query.id as string,
            },
            include: {
                picture: true,
                author: true,
            },
            rejectOnNotFound: true,
        });
        await prisma.$disconnect();
        res.status(200).json(post);
    } catch (error: unknown) {
        res.status(500).json({
            name: "Error",
            message: error as string,
        });
    }
}
