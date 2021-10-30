/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import Cookies from "cookies";
import jwt from "jsonwebtoken";
import prisma from "../../../../prisma/client";
import { User } from ".prisma/client";

interface UserPayload {
    email: string;
    id: string;
    role: Role[];
}

export default async function refresh(
    req: NextApiRequest,
    res: NextApiResponse<UserPayload | Error | { message: string }>,
): Promise<void> {
    try {
        const cookies = new Cookies(req, res);
        const token = cookies.get("token");
        if (!token) {
            return res.status(401).json({ message: "You need to login" });
        }
        const user = jwt.verify(token, process.env.TOKEN_SECRET as string);

        if (!user.id) {
            return res.status(401).json({ message: "You need to login" });
        }
        return res.status(200).json(user as UserPayload);
    } catch (error) {
        console.log(error);
        return res.status(404).send({ message: "error during register" });
    }
}
