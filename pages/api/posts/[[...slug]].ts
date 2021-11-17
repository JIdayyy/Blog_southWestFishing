import category from "src/RESOLVERS/categories/category";
import type { NextApiRequest, NextApiResponse } from "next";
import { Post } from ".prisma/client";

const AllSlugPostHandler = (
    req: NextApiRequest,
    res: NextApiResponse<Post | Post[] | Error | null>,
): Promise<void> => {
    if (req.method === "GET") {
        return category.getAll(req, res);
    }
    throw new Error("Method not allowed");
};
export default AllSlugPostHandler;
