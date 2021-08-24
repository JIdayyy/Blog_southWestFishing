import { NextApiRequest, NextApiResponse } from "next";
import getUser from "./getUsers";
import createUser from "./createUser";
import deleteUser from "./deleteUser";

const comment = {
    get: async (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
        await getUser(req, res),
    create: async (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
        await createUser(req, res),
    deleteUser: async (
        req: NextApiRequest,
        res: NextApiResponse,
    ): Promise<void> => await deleteUser(req, res),
};

export default comment;
