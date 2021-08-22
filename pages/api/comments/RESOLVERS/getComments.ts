import { Comment } from ".prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";
interface Data {
    id: string;
    content: string;
    postId: string;
    createdAt: Date;
    email: string;
}
export default async function getComments(
    req: NextApiRequest,
    res: NextApiResponse<Data[] | Comment[] | Error>,
): Promise<void> {
    try {
        const comments = await prisma.comment.findMany();
        res.status(200).json(comments);
    } catch (error) {
        console.log(error);
        res.status(500).json({ name: "Error", message: "Comment Error" });
    }
}
