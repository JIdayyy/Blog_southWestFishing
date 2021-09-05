import Title from "@components/Assets/Title/Title";

import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";

interface IProps {
    setIsMenu: (isMenu: boolean) => void;
}

export default function Menu({ setIsMenu }: IProps): JSX.Element {
    const ref = useRef(null);
    const variants = {
        open: { width: "25%" },
        close: { width: "0%" },
    };
    const router = useRouter();
    const handleClickOutside = () => {
        // Your custom logic here
        setIsMenu(false);
    };
    useOnClickOutside(ref, handleClickOutside);
    return (
        <motion.div
            ref={ref}
            variants={variants}
            animate="open"
            initial="close"
            className="fixed md:w-1/4 w-full  left-0 h-screen  flex  z-20"
        >
            <div className=" w-full flex flex-col items-center align-middle justify-center h-screen bg-black">
                <Title className="text-white">
                    <button onClick={() => router.push("/")}>
                        SOUTH WEST FISHING
                    </button>
                </Title>
                <Title className="text-white">
                    <button onClick={() => router.push("/admin")}>ADMIN</button>
                </Title>
            </div>
        </motion.div>
    );
}
