import { motion } from "framer-motion";
import axios from "axios";
import React, { ReactElement } from "react";
import { useMutation, useQueryClient } from "react-query";

interface IProps {
    comment: IComment;
}

export default function CommentItem({ comment }: IProps): ReactElement {
    const queryClient = useQueryClient();
    const { mutate: deleteComment, isLoading } = useMutation(
        (id: string) =>
            axios.delete(`${process.env.NEXT_PUBLIC_API_URL}comments/${id}`),
        {
            onError: (err) => console.log(err),
            onSuccess: () => queryClient.refetchQueries(["getComments"]),
        },
    );

    return (
        <motion.li
            whileHover={{ backgroundColor: "#696969" }}
            className="flex w-full h-24 items-center cursor-pointer my-2 align-middle justify-between"
        >
            <div className="w-full ">{comment.username}</div>
            <div className="w-full ">{comment.email}</div>
            <div className="w-full truncate ">{comment.content}</div>
            <div className="w-full ">{comment.createdAt}</div>

            {!isLoading ? (
                <button
                    onClick={() => deleteComment(comment.id)}
                    className="bg-red  px-3 rounded-1"
                >
                    SUPPRIMER
                </button>
            ) : (
                <div className=" text-white text-10 rounded-1 px-3 rounded-2 ">
                    Loading..
                </div>
            )}
        </motion.li>
    );
}
