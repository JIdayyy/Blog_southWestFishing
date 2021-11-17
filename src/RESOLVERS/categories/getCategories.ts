/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { NextApiRequest, NextApiResponse } from "next";
import { Category } from ".prisma/client";
import prisma from "../../../prisma/client";

export default async function getCategories(
    req: NextApiRequest,
    res: NextApiResponse<
        | Category[]
        | {
              name: string;
              message: string;
              code: string;
          }
    >,
): Promise<void> {
    try {
        const categories = await prisma.category.findMany();
        await prisma.$disconnect();
        res.status(200).json(categories);
    } catch (error: unknown) {
        console.error(error);
        res.status(500).json({
            name: "Internal Server Error",
            message: "Something went wrong",
            code: "INTERNAL_SERVER_ERROR",
        });
    }
}
