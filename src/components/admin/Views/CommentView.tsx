import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { Comment } from ".prisma/client";
import { motion } from "framer-motion";
import { useState } from "react";
export default function CommentView(): JSX.Element {
    const [isModal, setIsModal] = useState(false);
    const { data, isLoading, error, refetch } = useQuery("getComments", () =>
        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}comments`)
            .then((r) => r.data)
            .catch((err) => console.log(err)),
    );

    const mutation = useMutation(
        (id: string) =>
            axios.delete(`${process.env.NEXT_PUBLIC_API_URL}comments/${id}`),
        {
            onError: (err) => console.log(err),
            onSuccess: () => refetch(),
        },
    );

    if (error) return <div>Error ...</div>;
    if (isLoading) return <div>Loading ...</div>;
    return (
        <div className="bg-black my-20 shadow-8 text-10 w-full h-1/2 flex flex-col rounded-2 p-4">
            <div className="text-xl">Liste des Commentaires :</div>
            <div className="flex border-b text-gray-600 w-full items-center align-middle justify-between">
                <div className="w-full ">User</div>
                <div className="w-full ">Email</div>
                <div className="w-full ">Contenu</div>
                <div className="w-full ">Parution</div>
                <div className="bg-red rounded-1 px-3 rounded-2 opacity-0">
                    SUPPRIMER
                </div>
            </div>
            <ul className="flex flex-col w-full scrollbar items-center align-middle justify-between">
                {data &&
                    data.map((comment: Comment) => (
                        <motion.li
                            whileHover={{ backgroundColor: "#696969" }}
                            className="flex w-full items-center cursor-pointer my-2 align-middle justify-between"
                        >
                            <div className="w-full ">{comment.username}</div>
                            <div className="w-full ">{comment.email}</div>
                            <div className="w-full truncate ">
                                {comment.content}
                            </div>
                            <div className="w-full ">{comment.createdAt}</div>
                            <button
                                onClick={() => mutation.mutate(comment.id)}
                                className="bg-red rounded-1 px-3 rounded-2"
                            >
                                SUPPRIMER
                            </button>
                        </motion.li>
                    ))}
            </ul>
        </div>
    );
}
