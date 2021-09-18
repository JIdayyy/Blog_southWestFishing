import { Comment } from ".prisma/client";
import Title from "@components/Assets/Title/Title";
import { motion } from "framer-motion";
interface IProps {
    comment: Comment;
    index: number;
}
export default function CommentCard({ comment }: IProps): JSX.Element {
    console.log("test");
    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            className={`w-full p-10 bg-gray-A100 relative rounded-2 h-92 bg-transparent border-b my-32  flex ${"flex-row"}`}
        >
            <div className="text-black flex flex-col justify-start items-start align-top text-10 w-9/12 break-words font-400 h-full ">
                <Title className="text-black text-10 w-full break-words font-400 h-full ">
                    {comment.content}
                </Title>
            </div>
            <div className="h-full mx-10  w-3/12 text-10 font-600 flex flex-col text-left items-start align-top justify-start">
                {/* <Title className="text-black w-full">{comment.username}</Title>
                <Title className="text-black w-full">{comment.email}</Title> */}
                <Title className=" w-full absolute -bottom-12 font-200 transform -translate-x-384 text-right  text-grey-A200">
                    {comment.username} - {comment.email} -
                    {new Date(comment.createdAt).toLocaleDateString()}
                </Title>
            </div>
        </motion.div>
    );
}
