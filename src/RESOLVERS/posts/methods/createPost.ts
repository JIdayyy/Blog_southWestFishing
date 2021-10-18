import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";
import { Post } from ".prisma/client";
export default async function createPosts(
    req: NextApiRequest,
    res: NextApiResponse<Post | Error>,
): Promise<void> {
    const body = req.body;
    console.log(body);

    const { title, content, pictures, userId } = body;
    try {
        const post = await prisma.post.create({
            data: {
                title: title,
                content: content,
                userId: userId,
            },
        });

        await pictures.map(
            async (picture: string, index: number) =>
                await prisma.picture.create({
                    data: {
                        url: picture,
                        postId: post.id,
                        main: index === 0 ? true : false,
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
