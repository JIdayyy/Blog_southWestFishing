import { motion } from "framer-motion";
import { Comment } from ".prisma/client";
import Title from "@components/Assets/Title/Title";

interface IProps {
    comment: Comment;
}
export default function CommentCard({ comment }: IProps): JSX.Element {
    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            className={`w-full p-10 bg-white text-black shadow-5 relative overflow-hidden rounded-2 h-92 bg-transparent border-b my-12 md:my-14  flex ${"flex-row"}`}
        >
            <div className="text-black flex flex-col justify-start items-start align-top text-10 w-9/12 break-words font-400 h-full ">
                <div>{comment.content}</div>
            </div>
            <div className="h-full mx-10  w-3/12 text-10 font-600 flex flex-col text-left items-start align-top justify-start">
                <Title className=" w-full z-99 absolute bottom-0 right-0 pb-5 pr-5 bg-white  font-200  text-right  text-black">
                    {comment.username} -
                    {new Date(comment.createdAt).toLocaleDateString()} /
                    {new Date(comment.createdAt).toLocaleTimeString()}
                </Title>
            </div>
        </motion.div>
    );
}
