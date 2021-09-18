import { Post } from ".prisma/client";
import prisma from "../prisma/client";
export async function getAllPostIds(): Promise<
    { params: { id: Post["id"] } }[]
> {
    const posts = await prisma.post.findMany();
    await prisma.$disconnect();
    const paths = posts.map((post) => {
        return {
            params: {
                id: post.id,
            },
        };
    });

    return paths;
}
export default getAllPostIds;
