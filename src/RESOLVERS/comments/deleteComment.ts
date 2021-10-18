import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";
import { Comment } from ".prisma/client";
export default async function deleteComment(
    req: NextApiRequest,
    res: NextApiResponse<Comment | Error>,
    id: string | string[],
): Promise<void> {
    try {
        await prisma.comment.delete({
            where: {
                id: id as string,
            },
        });
        await prisma.$disconnect();
        res.status(204).send({
            message: "Comment deleted",
            name: "deleted Successfully",
        });
    } catch (error: unknown) {
        res.status(500).json({ name: "Error", message: error as string });
    }
}
