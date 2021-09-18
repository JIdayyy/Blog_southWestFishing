import { NextApiRequest, NextApiResponse } from "next";
import login from "./methods/login";

const comment = {
    login: async (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
        await login(req, res),
};

export default comment;
