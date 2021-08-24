import type { NextApiRequest, NextApiResponse } from "next";
import users from "../RESOLVERS/users/users";

interface Data {
    id: string;
    content: string;
    postId: string;
    createdAt: Date;
    email: string;
}

export default async function userHandler(
    req: NextApiRequest,
    res: NextApiResponse<Data | Data[] | Error | null>,
): Promise<void> {
    if (req.method === "DELETE") {
        const { slug } = req.query;
        console.log("delete");
        return users.deleteUser(req, res, slug);
    }
}
