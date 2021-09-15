import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";
import { Post } from ".prisma/client";
export default async function createPosts(
    req: NextApiRequest,
    res: NextApiResponse<Post | Error>,
): Promise<void> {
    const body = req.body;
    console.log({ ...body });
    try {
        const post = await prisma.post.create({
            data: {
                ...body,
            },
        });
        res.status(201).json(post);
    } catch (error: unknown) {
        console.log(error);

        res.status(500).json({ name: "Error", message: error as string });
    }
}
