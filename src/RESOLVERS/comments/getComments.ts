/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { NextApiRequest, NextApiResponse } from "next";
import { Comment } from ".prisma/client";
import prisma from "../../../prisma/client";

export default async function getComments(
    req: NextApiRequest,
    res: NextApiResponse<
        | Comment[]
        | {
              name: string;
              message: string;
              code: string;
          }
    >,
): Promise<void> {
    try {
        const comments = await prisma.comment.findMany();
        await prisma.$disconnect();
        res.status(200).json(comments);
    } catch (error: unknown) {
        console.error(error);
        res.status(500).json({
            name: "Internal Server Error",
            message: "Something went wrong",
            code: "INTERNAL_SERVER_ERROR",
        });
    }
}
