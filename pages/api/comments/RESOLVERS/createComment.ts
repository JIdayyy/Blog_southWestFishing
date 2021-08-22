import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";
interface Data {
    id: string;
    content: string;
    postId: string;
    createdAt: Date;
    email: string;
}
export default async function createComment(
    req: NextApiRequest,
    res: NextApiResponse<Data | Error>,
): Promise<void> {
    const body = req.body;
    console.log({ ...body });
    try {
        const comment = await prisma.comment.create({
            data: {
                content: body.content,
                email: body.email,
                username: body.username,
                post: {
                    connect: {
                        id: body.postId,
                    },
                },
            },
        });
        res.status(201).json(comment);
    } catch (error) {
        console.log(error);
        res.status(500).json({ name: "Error", message: "Comment Error" });
    }
}
