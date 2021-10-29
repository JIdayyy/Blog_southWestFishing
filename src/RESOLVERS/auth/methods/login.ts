/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";
import { User } from ".prisma/client";

type UserWithoutPassword = Omit<User, "password">;

export default async function login(
    req: NextApiRequest,
    res: NextApiResponse<UserWithoutPassword | Error | string>,
): Promise<void> {
    const { body } = req;

    try {
        const user = await prisma.user.findFirst({
            where: { email: body.email },
        });
        if (!user) {
            return res.status(404).send("User not found");
        }
        if (user.password !== body.password) {
            return res.status(401).send("Wrong password");
        }

        const { password, ...userWithoutPassword } = user;

        await prisma.$disconnect();

        res.status(201).send(userWithoutPassword);
    } catch (error: unknown) {
        console.log(error);
        res.status(500).json({
            name: "Error invalid credentials",
            message: error as string,
        });
    }
    throw new Error("Unreachable");
}
