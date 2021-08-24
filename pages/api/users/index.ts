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
    if (req.method === "POST") {
        return users.create(req, res);
    }
    if (req.method === "GET") {
        return users.get(req, res);
    }
    if (req.method === "DELETE") {
        return users.deleteUser(req, res);
    }
}
