import { User } from ".prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";

export default async function getUsers(
    req: NextApiRequest,
    res: NextApiResponse<User[] | Error>,
): Promise<void> {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error: unknown) {
        res.status(500).json({
            name: "Error",
            message: error as string,
        });
    }
}
