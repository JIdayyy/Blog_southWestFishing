import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";
import { User } from ".prisma/client";

type userWithoutPassword = Omit<User, "password">;

export default async function login(
    req: NextApiRequest,
    res: NextApiResponse<userWithoutPassword | Error | string>,
): Promise<void> {
    const body = req.body;

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
        await prisma.$disconnect();
        delete user.password;

        res.status(201).send(user);
    } catch (error: unknown) {
        console.log(error);
        res.status(500).json({
            name: "Error invalid credentials",
            message: error as string,
        });
    }
}
