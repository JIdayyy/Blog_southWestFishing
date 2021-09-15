import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";
import { Post } from ".prisma/client";
export default async function deletePost(
    req: NextApiRequest,
    res: NextApiResponse<Post | Error>,
    id: string | string[],
): Promise<void> {
    try {
        await prisma.post.delete({
            where: {
                id: id as string,
            },
        });
        res.status(204).send({
            message: "post deleted",
            name: "deleted Successfully",
        });
    } catch (error: unknown) {
        console.log(error);

        res.status(500).json({ name: "Error", message: error as string });
    }
}
