/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Comment, Prisma } from ".prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
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
        if (
            error instanceof Prisma.PrismaClientUnknownRequestError ||
            error instanceof Prisma.PrismaClientValidationError ||
            error instanceof Prisma.PrismaClientKnownRequestError ||
            error instanceof Prisma.PrismaClientInitializationError ||
            error instanceof Prisma.PrismaClientRustPanicError
        ) {
            console.log(error);
            return res.status(500).json({
                name: "Error",
                message: error.message!,
                code: error.stack!,
            });
        } else {
            console.log(error);
            return res.status(500).json({
                name: "Error",
                message: error as string,
                code: "UNKNOWN",
            });
        }
    }
}
