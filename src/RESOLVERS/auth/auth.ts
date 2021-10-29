import { NextApiRequest, NextApiResponse } from "next";
import register from "./methods/register";
import login from "./methods/login";

const auth = {
    login: async (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
        login(req, res),
    register: async (
        req: NextApiRequest,
        res: NextApiResponse,
    ): Promise<void> => register(req, res),
};

export default auth;
