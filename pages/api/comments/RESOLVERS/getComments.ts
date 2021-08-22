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
    res: NextApiResponse<Data[] | Error>,
): Promise<void> {
    try {
        const comments = await prisma.comment.findMany();
        res.status(201).json(comments);
    } catch (error) {
        console.log(error);
        res.status(500).json({ name: "Error", message: "Comment Error" });
    }
}
