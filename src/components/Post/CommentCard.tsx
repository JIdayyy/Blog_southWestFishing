import { Comment } from ".prisma/client";
import Title from "@components/Assets/Title/Title";
import { motion } from "framer-motion";
interface IProps {
    comment: Comment;
    index: number;
}
export default function CommentCard({ comment, index }: IProps): JSX.Element {
    console.log("test");
    return (
        <motion.div
            whileHover={{ backgroundColor: "#2F4F4F", scale: 1.02 }}
            className={`w-full p-10 rounded-8 h-92 bg-transparent border-b my-20  flex ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
        >
            <Title className="text-white text-10 w-full font-600 h-full flex items-center align-middle justify-center">
                {comment.content}
            </Title>
            <div className="h-full mx-10 text-10 font-200 flex flex-col text-left items-center align-middle justify-center">
                <Title className="text-white w-full">{comment.username}</Title>
                <Title className="text-white w-full">
                    {new Date(comment.createdAt).toLocaleDateString()}
                </Title>
                <Title className="text-white w-full">{comment.email}</Title>
            </div>
        </motion.div>
    );
}
