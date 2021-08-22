import { NextApiRequest, NextApiResponse } from "next";
import getPost from "./getPosts";
import createPost from "./createPost";

const comment = {
    get: async (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
        await getPost(req, res),
    create: async (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
        await createPost(req, res),
};

export default comment;
