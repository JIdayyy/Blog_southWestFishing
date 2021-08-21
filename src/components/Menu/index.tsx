import Title from "@components/Assets/Title/Title";

import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
export default function Menu(): JSX.Element {
    const variants = {
        open: { width: "100%" },
        close: { width: "0%" },
    };
    const router = useRouter();
    return (
        <motion.div
            variants={variants}
            animate="open"
            initial="close"
            className="fixed h-screen w-screen flex  z-20"
        >
            <div className="md:w-1/4 w-full flex flex-col items-center align-middle justify-center h-screen bg-black">
                <Title className="text-white">
                    <button onClick={() => router.push("/")}>
                        SOUTH WEST FISHING
                    </button>
                </Title>
            </div>
        </motion.div>
    );
}
