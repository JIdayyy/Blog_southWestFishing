import { NextApiRequest, NextApiResponse } from "next";
import getPost from "./methods/getPosts";
import deletePost from "./methods/deletepost";
import createPost from "./methods/createPost";
import getOnePost from "./methods/getOnePost";

const comment = {
    get: async (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
        getPost(req, res),
    getOne: async (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
        getOnePost(req, res),
    create: async (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
        createPost(req, res),
    deletePost: async (
        req: NextApiRequest,
        res: NextApiResponse,
        id: string | string[],
    ): Promise<void> => deletePost(req, res, id),
};

export default comment;
