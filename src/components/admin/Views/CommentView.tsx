import { useQuery } from "react-query";
import axios from "axios";
import { Comment } from ".prisma/client";
import { motion } from "framer-motion";
export default function CommentView(): JSX.Element {
    const { data, isLoading, error } = useQuery("getComments", () =>
        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}comments`)
            .then((r) => r.data)
            .catch((err) => console.log(err)),
    );
    console.log(data);
    if (error) return <div>Error ...</div>;
    if (isLoading) return <div>Loading ...</div>;
    return (
        <div className="bg-black my-20 text-10 w-full h-1/2 flex flex-col rounded-2 p-4">
            <div className="text-xl">Liste des Commentaires :</div>
            <ul className="flex flex-col w-full overflow-y-scroll items-center align-middle justify-between">
                <li className="flex border-b text-gray-600 w-full items-center align-middle justify-between">
                    <div className="w-full ">User</div>
                    <div className="w-full ">Email</div>
                    <div className="w-full ">Contenu</div>
                    <div className="w-full ">Parution</div>
                </li>
                {data &&
                    data.map((comment: Comment) => (
                        <motion.li
                            whileHover={{ backgroundColor: "#696969" }}
                            className="flex w-full items-center cursor-pointer align-middle justify-between"
                        >
                            <div className="w-full ">{comment.username}</div>
                            <div className="w-full ">{comment.email}</div>
                            <div className="w-full truncate ">
                                {comment.content}
                            </div>
                            <div className="w-full ">{comment.createdAt}</div>
                        </motion.li>
                    ))}
            </ul>
        </div>
    );
}
