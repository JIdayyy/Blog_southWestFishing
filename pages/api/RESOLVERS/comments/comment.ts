import { NextApiRequest, NextApiResponse } from "next";
import createComment from "./createComment";
import getComments from "./getComments";

const comment = {
    get: async (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
        await getComments(req, res),

    create: async (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
        await createComment(req, res),
};

export default comment;
