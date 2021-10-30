/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";
import { Post } from ".prisma/client";

export default async function createPosts(
    req: NextApiRequest,
    res: NextApiResponse<Post | Error>,
): Promise<void> {
    const { body } = req;
    console.log(body);

    const { title, content, pictures, userId } = body;
    console.log(pictures);

    try {
        const post = await prisma.post.create({
            data: {
                title,
                content,
                userId,
            },
        });
        await prisma.picture.createMany({
            data: pictures.map((picture: string, index: number) => ({
                url: picture,
                postId: post.id,
                main: !!index,
            })),
            skipDuplicates: true,
        });
        await prisma.$disconnect();
        res.status(201).json(post);
    } catch (error: unknown) {
        console.log(error);

        res.status(500).json({ name: "Error", message: error as string });
    }
}
