import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";
import { User } from ".prisma/client";
export default async function createUser(
    req: NextApiRequest,
    res: NextApiResponse<User | Error>,
): Promise<void> {
    const body = req.body;
    console.log({ ...body });
    try {
        const user = await prisma.user.create({
            data: {
                ...body,
            },
        });
        await prisma.$disconnect();
        res.status(201).json(user);
    } catch (error: unknown) {
        console.log(error);

        res.status(500).json({ name: "Error", message: error as string });
    }
}
