import { NextApiRequest, NextApiResponse } from "next";
import login from "./methods/login";

const comment = {
    login: async (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
        login(req, res),
};

export default comment;
