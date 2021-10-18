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
            whileTap={{ scale: 1 }}
            className="text-black  rounded-4 relative overflow-auto shadow-5 items-start align-middle cursor-pointer justify-between flex text-13 w-full  my-10 "
        >
            {post.picture[0] && (
                <Image
                    width={200}
                    height={200}
                    className="rounded-1"
                    src={post.picture[0].url}
                />
            )}
            <div className="flex  w-full h-full  flex-col items-start p-6">
                <Title className="text-xl text-whtie">{post.title}</Title>
                <div
                    dangerouslySetInnerHTML={{
                        __html: post.content.toString(),
                    }}
                    className="text-10 h-full w-full truncate overflow-hidden"
                ></div>
                <div className="text-10 absolute bottom-0 pr-5 pb-5 bg-white  z-99 right-0 text-black  text-right">
                    {post.author.name} le {post.createdAt.toLocaleDateString()}
                </div>
            </div>
        </motion.div>
    );
}
