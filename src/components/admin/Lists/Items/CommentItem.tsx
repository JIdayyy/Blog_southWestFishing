/* eslint-disable no-console */
import { motion } from "framer-motion";
import React, { ReactElement } from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import AXIOS from "src/utils/AXIOS";

interface IProps {
    comment: IComment;
}

export default function CommentItem({ comment }: IProps): ReactElement {
    const deleteNotification = () => toast("Commentaire supprimé !");
    const queryClient = useQueryClient();

    const { mutate: deleteComment, isLoading } = useMutation(
        (id: string) =>
            AXIOS.delete(`${process.env.NEXT_PUBLIC_API_URL}comments/${id}`),
        {
            onError: (err) => console.log(err),
            onSuccess: () => {
                deleteNotification();
                queryClient.refetchQueries(["getComments"]);
            },
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
                    type="button"
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
