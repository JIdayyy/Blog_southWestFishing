import { NextApiRequest, NextApiResponse } from "next";
import createComment from "./createComment";
import deleteComment from "./deleteComment";
import getCategories from "./getCategories";
import getComments from "./getComments";

const category = {
    getAll: async (req: NextApiRequest, res: NextApiResponse): Promise<void> =>
        getCategories(req, res),
};

export default category;
