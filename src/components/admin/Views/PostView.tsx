import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { Post } from ".prisma/client";
import { motion } from "framer-motion";
export default function PostView(): JSX.Element {
    const { data, error, isLoading, refetch } = useQuery("getPosts", () =>
        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}posts`)
            .then((r) => r.data)
            .catch((err) => console.log(err)),
    );

    const mutation = useMutation(
        (id: string) =>
            axios.delete(`${process.env.NEXT_PUBLIC_API_URL}posts/${id}`),
        {
            onError: (err) => console.log(err),
            onSuccess: () => refetch(),
        },
    );
    if (error) return <div>Error</div>;
    if (isLoading) return <div>Loading ...</div>;
    return (
        <div className="bg-black text-10 my-20 w-full h-1/2 flex flex-col rounded-2 p-4">
            <div className="text-xl">Liste des Posts :</div>
            <div className="flex border-b text-gray-600 w-full items-center align-middle justify-between">
                <div className="w-full">Title</div>
                <div className="w-full">Body</div>
                <div className="w-full">Publication</div>
                <div className="bg-red rounded-1 px-3 rounded-2 opacity-0">
                    SUPPRIMER
                </div>
            </div>
            <ul className="flex flex-col w-full overflow-y-scroll items-center align-middle justify-between">
                {data &&
                    data.map((post: Post) => (
                        <motion.li
                            whileHover={{ backgroundColor: "#696969" }}
                            className="flex cursor-pointer w-full items-center align-middle justify-between"
                        >
                            <div className="w-full">{post.title}</div>
                            <div className="w-full truncate">
                                {post.content}
                            </div>
                            <div className="w-full">{post.createdAt}</div>
                            <button
                                onClick={() => mutation.mutate(post.id)}
                                className="bg-red rounded-1"
                            >
                                SUPPRIMER
                            </button>
                        </motion.li>
                    ))}
            </ul>
        </div>
    );
}
