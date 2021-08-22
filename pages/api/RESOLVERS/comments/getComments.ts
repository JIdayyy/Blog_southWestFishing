import { Comment } from ".prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";

export default async function getComments(
    req: NextApiRequest,
    res: NextApiResponse<Comment[] | Error>,
): Promise<void> {
    try {
        const comments = await prisma.comment.findMany();
        res.status(200).json(comments);
    } catch (error: unknown) {
        res.status(500).json({
            name: "Error",
            message: error as string,
        });
    }
}
