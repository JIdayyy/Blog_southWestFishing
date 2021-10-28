import axios from "axios";
import { motion } from "framer-motion";
import React, { ReactElement } from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

interface IProps {
    post: IPost;
}

export default function PostItem({ post }: IProps): ReactElement {
    const deleteNotification = () => toast("Post supprimé !");
    const queryClient = useQueryClient();
    const { mutate: deletePost, isLoading } = useMutation(
        (id: string) =>
            axios.delete(`${process.env.NEXT_PUBLIC_API_URL}posts/${id}`),
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
            className="flex my-2 cursor-pointer w-full items-center h-24 overflow-y-hidden overscroll-x-hidden align-middle justify-between"
        >
            <div className="w-full">{post.title}</div>
            <div className="w-full">{post.createdAt}</div>
            {!isLoading ? (
                <button
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
            <button className="bg-blue mx-1 rounded-1 px-4 outline-none focus:outline-none">
                <a href={`/preview/${post.id}`} target="_blank">
                    PREVIEW
                </a>
            </button>
        </motion.li>
    );
}
