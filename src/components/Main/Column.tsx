import About from "./About";
import Image from "next/image";
import FadeIn from "@components/AnimatedComponents/FadeIn";
import { motion } from "framer-motion";
export default function Column(): JSX.Element {
    return (
        <FadeIn
            delay={0.3}
            className="bg-gray-800 mt-88 px-8 lg:px-0 w-full md:w-160  text-white flex flex-col justify-start items-start align-middle"
        >
            <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative w-full h-288 md:h-160"
            >
                <Image
                    className="rounded-t-4"
                    src="/images/column_pic.jpeg"
                    layout="fill"
                />
            </motion.div>
            <About />
            <div className="w-full h-288 p-6 flex flex-col justify-around items-center">
                <Image
                    className="my-8"
                    src="/images/epf.png"
                    width={200}
                    height={200}
                />
                <Image src="/images/st_croix.png" width={230} height={100} />
            </div>
        </FadeIn>
    );
}
