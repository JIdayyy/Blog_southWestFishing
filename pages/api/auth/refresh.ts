import type { NextApiRequest, NextApiResponse } from "next";
import auth from "../../../src/RESOLVERS/auth/auth";

interface Data {
    email: string;
    password: string;
}

const refreshHandler = (
    req: NextApiRequest,
    res: NextApiResponse<Data | Data[] | Error | null>,
): Promise<void> | void => {
    if (req.method === "POST") {
        return auth.refresh(req, res);
    }
    throw new Error("Method not allowed");
};
export default refreshHandler;
