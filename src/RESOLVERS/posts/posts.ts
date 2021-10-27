import { NextApiRequest, NextApiResponse } from "next";
import getPost from "./methods/getPosts";
import deletePost from "./methods/deletepost";
import createPost from "./methods/createPost";
import getOnePost from "./methods/getOnePost";
const comment = {
    get: async (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
        await getPost(req, res),
    getOne: async (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
        await getOnePost(req, res),
    create: async (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
        await createPost(req, res),
    deletePost: async (
        req: NextApiRequest,
        res: NextApiResponse,
        id: string | string[],
    ): Promise<void> => await deletePost(req, res, id),
};

export default comment;
