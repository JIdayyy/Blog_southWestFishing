import type { NextApiRequest, NextApiResponse } from "next";
import auth from "../../../src/RESOLVERS/auth/auth";

interface Data {
    email: string;
    password: string;
}

export default async function userHandler(
    req: NextApiRequest,
    res: NextApiResponse<Data | Data[] | Error | null>,
): Promise<void> {
    console.log("post");
    if (req.method === "POST") {
        return auth.login(req, res);
    }
}
