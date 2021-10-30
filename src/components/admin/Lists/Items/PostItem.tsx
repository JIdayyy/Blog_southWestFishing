/* eslint-disable no-console */
import { motion } from "framer-motion";
import React, { ReactElement } from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import AXIOS from "src/utils/AXIOS";

interface IProps {
    post: IPost;
}

export default function PostItem({ post }: IProps): ReactElement {
    const deleteNotification = () => toast("Post supprimé !");
    const queryClient = useQueryClient();
    const { mutate: deletePost, isLoading } = useMutation(
        (id: string) =>
            AXIOS.delete(`${process.env.NEXT_PUBLIC_API_URL}posts/${id}`),
        {
            onError: (err) => console.log(err),
            onSuccess: () => {
                deleteNotification();
                queryClient.refetchQueries(["getPosts"]);
            },
        },
    );

    return (
        <motion.li
            whileHover={{ backgroundColor: "#696969" }}
            className="flex my-2 cursor-pointer w-full relative items-center h-24 overflow-y-hidden overscroll-x-hidden align-middle justify-between"
        >
            <div className="w-full">{post.title}</div>
            <div className="w-full">
                {new Date(post.createdAt).toLocaleDateString()}-
                {new Date(post.createdAt).toLocaleTimeString()}
            </div>
            <div className="absolute right-0">
                {!isLoading ? (
                    <button
                        type="button"
                        onClick={() => deletePost(post.id)}
                        className="bg-red  px-3 rounded-1"
                    >
                        SUPPRIMER
                    </button>
                ) : (
                    <div className=" text-white text-10 rounded-1 px-3 rounded-2 ">
                        Loading..
                    </div>
                )}
                <button
                    type="button"
                    className="bg-blue mx-1  rounded-1 px-4 outline-none focus:outline-none"
                >
                    <a
                        href={`/preview/${post.id}`}
                        rel="noreferrer"
                        target="_blank"
                    >
                        PREVIEW
                    </a>
                </button>
            </div>
        </motion.li>
    );
}
