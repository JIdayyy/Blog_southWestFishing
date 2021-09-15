import { NextApiRequest, NextApiResponse } from "next";
import getPost from "./getPosts";
import deletePost from "./deletepost";
import createPost from "./createPost";
const comment = {
    get: async (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
        await getPost(req, res),
    create: async (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
        await createPost(req, res),
    deletePost: async (
        req: NextApiRequest,
        res: NextApiResponse,
        id: string | string[],
    ): Promise<void> => await deletePost(req, res, id),
};

export default comment;
