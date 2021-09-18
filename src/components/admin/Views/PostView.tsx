import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { Post } from ".prisma/client";
import { motion } from "framer-motion";
import { style } from "@styles/TailwindClasses";
import { useState } from "react";
import CreatePost from "@components/Modal/CreatePost";
export default function PostView(): JSX.Element {
    const [showAddPost, setShowAddPost] = useState<boolean>(false);
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
        <div className="bg-black text-10 my-20 shadow-8 w-full h-1/2 flex flex-col rounded-2 p-4">
            <div className="text-xl">Liste des Posts :</div>{" "}
            <button
                onClick={() => setShowAddPost(true)}
                className={style.button("blue")}
            >
                Ajouter
            </button>
            {showAddPost && (
                <CreatePost refetch={refetch} setIsOpen={setShowAddPost} />
            )}
            <div className="flex border-b text-gray-600 w-full items-center align-middle justify-between">
                <div className="w-full">Title</div>
                <div className="w-full">Body</div>
                <div className="w-full">Publication</div>
                <div className="bg-red rounded-1 px-3 rounded-2 opacity-0">
                    SUPPRIMER
                </div>
            </div>
            <ul className="flex flex-col w-full overflow-y-scroll scrollbar  items-center align-middle justify-between">
                {data &&
                    data.map((post: Post) => (
                        <motion.li
                            whileHover={{ backgroundColor: "#696969" }}
                            className="flex my-2 cursor-pointer w-full items-center align-middle justify-between"
                        >
                            <div className="w-full">{post.title}</div>
                            <div className="w-full truncate">
                                {post.content}
                            </div>
                            <div className="w-full">{post.createdAt}</div>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                onClick={() => mutation.mutate(post.id)}
                                className="bg-red rounded-1 px-4 outline-none focus:outline-none"
                            >
                                SUPPRIMER
                            </motion.button>
                        </motion.li>
                    ))}
            </ul>
        </div>
    );
}
