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
              test?: any;
              another?: any;
          }
    >,
): Promise<void> {
    try {
        const comments = await prisma.comment.findMany();
        res.status(200).json(comments);
    } catch (error: unknown) {
        if (error instanceof Prisma.PrismaClientValidationError) {
            console.log(error);
            return res.status(500).json({
                name: "Error",
                message: error.message,
                code: error.stack,
                test: error,
            });
        } else {
            console.log(error);
            return res.status(500).json({
                name: "Error",
                message: error as string,
                code: "UNKNOWN",
                test: error,
            });
        }
    }
}
