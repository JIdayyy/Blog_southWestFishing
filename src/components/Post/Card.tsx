import Title from "@components/Assets/Title/Title";
import { PostWithAuthorAndPictures } from "pages";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
interface IProps {
    post: PostWithAuthorAndPictures;
}

export default function Card({ post }: IProps): JSX.Element {
    const router = useRouter();

    return (
        <motion.div
            onClick={() => router.push(`/post/${post.id}`)}
            whileHover={{ backgroundColor: "#2F4F4F", scale: 1.005 }}
            whileTap={{ scale: 1 }}
            className="text-grey-A200 rounded-4 items-start align-middle cursor-pointer justify-between flex text-13 w-full h-96 my-10 "
        >
            {post.picture[0] && (
                <Image
                    width={200}
                    height={200}
                    className="rounded-1"
                    src={post.picture[0].url}
                />
            )}
            <div className="flex  w-full h-full flex-col items-start p-6">
                <Title className="text-xl text-whtie">{post.title}</Title>
                <div className="text-10 h-full w-full overflow-fade  overflow-hidden">
                    {post.content}
                </div>
                <div className="text-10 text-gray-500 w-full text-right">
                    {post.author.name} le {post.createdAt.toLocaleDateString()}
                </div>
            </div>
        </motion.div>
    );
}
