/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-underscore-dangle */
import Title from "@components/Assets/Title/Title";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import { createImageUrlBuilder } from "next-sanity";
import { Post } from "schema";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface IProps {
    post: Post;
}
const config = {
    dataset: "production",
    projectId: "hjbcv9e5",
    useCdn: "production",
};
const imageBuilder = (source: SanityImageSource) =>
    createImageUrlBuilder(config).image(source);

export default function Card({ post }: IProps): JSX.Element {
    const router = useRouter();
    const mainImage = imageBuilder(post.mainImage as SanityImageSource)
        .width(1240)
        .height(540)
        .url() as string;
    console.log(post);
    return (
        <motion.div
            onClick={() => router.push(`/post/${post.slug!.current}`)}
            whileTap={{ scale: 1 }}
            className="text-black h-96 rounded-2 relative overflow-auto shadow-5 items-start align-middle cursor-pointer justify-between flex text-13 w-full  my-10 "
        >
            <div className="h-full w-128 relative">
                {post.mainImage && (
                    <Image
                        priority
                        layout="fill"
                        className="rounded-1"
                        src={mainImage}
                        placeholder="blur"
                        blurDataURL={mainImage}
                    />
                )}
            </div>
            <div className="flex  w-full h-full  flex-col items-start align-middle justify-center p-6">
                <Title className="text-xl text-whtie">{post.title}</Title>

                <div className="text-10 absolute bottom-0 pr-5 pb-5 bg-white  z-99 right-0 text-black  text-right">
                    {post.author?.name} le{" "}
                    {new Date(post.publishedAt!).toLocaleDateString()}
                </div>
            </div>
        </motion.div>
    );
}
