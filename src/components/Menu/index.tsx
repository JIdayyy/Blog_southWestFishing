import Title from "@components/Assets/Title/Title";
import { motion } from "framer-motion";
export default function Menu(): JSX.Element {
    const variants = {
        open: { width: "100%" },
        close: { width: "0%" },
    };

    return (
        <motion.div
            variants={variants}
            animate="open"
            initial="close"
            className="fixed h-screen w-full flex  z-20"
        >
            <div className="md:w-1/4 w-full flex flex-col items-center align-middle justify-center h-full gradient">
                <Title className="text-white">SOUTH WEST FISHING</Title>
            </div>
        </motion.div>
    );
}
