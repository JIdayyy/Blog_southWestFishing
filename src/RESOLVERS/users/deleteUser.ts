import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";
import { User } from ".prisma/client";
export default async function deleteUser(
    req: NextApiRequest,
    res: NextApiResponse<User | Error>,
): Promise<void> {
    const { id } = req.query;

    try {
        await prisma.user.delete({
            where: {
                id: id as string,
            },
        });
        res.status(204).send({
            message: "user deleted",
            name: "deleted Successfully",
        });
    } catch (error: unknown) {
        console.log(error);

        res.status(500).json({ name: "Error", message: error as string });
    }
}
