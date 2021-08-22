import { NextApiRequest, NextApiResponse } from "next";
import getUser from "./getUsers";
import createUser from "./createUser";

const comment = {
    get: async (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
        await getUser(req, res),
    create: async (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
        await createUser(req, res),
};

export default comment;
