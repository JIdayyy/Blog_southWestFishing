/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

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
    const { body } = req;

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
        await prisma.$disconnect();
        res.status(201).json(comment);
    } catch (error: unknown) {
        console.log(error);
        res.status(500).json({ name: "Error", message: error as string });
    }
}
