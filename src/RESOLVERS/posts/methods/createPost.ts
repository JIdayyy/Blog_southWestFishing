/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";
import { Post } from ".prisma/client";

export default async function createPosts(
    req: NextApiRequest,
    res: NextApiResponse<Post | Error>,
): Promise<void> {
    const { body } = req;

    const { title, content, pictures, userId } = body;
    try {
        const post = await prisma.post.create({
            data: {
                title,
                content,
                userId,
            },
        });

        await pictures.map((picture: string, index: number) =>
            prisma.picture.create({
                data: {
                    url: picture,
                    postId: post.id,
                    main: !!index,
                },
            }),
        );
        await prisma.$disconnect();
        res.status(201).json(post);
    } catch (error: unknown) {
        console.log(error);

        res.status(500).json({ name: "Error", message: error as string });
    }
}
