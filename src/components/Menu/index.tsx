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

    const router = useRouter();
    const handleClickOutside = () => {
        // Your custom logic here
        setIsMenu(false);
    };
    useOnClickOutside(ref, handleClickOutside);
    return (
        <div className="fixed md:hidden flex w-full z-999 h-screen bg-realBlack left-0 top-0   bg-opacity-80">
            <motion.div
                ref={ref}
                className="w-9/12 shadow-10 bg-white  h-full flex"
            >
                <div className=" w-full flex flex-col text-black items-center align-middle justify-center h-screen bg-white">
                    <Title className="">
                        <button type="button" onClick={() => router.push("/")}>
                            SOUTH WEST FISHING
                        </button>
                    </Title>
                    <Title className="">
                        <button
                            type="button"
                            onClick={() => router.push("/admin")}
                        >
                            ADMIN
                        </button>
                    </Title>
                </div>
            </motion.div>
        </div>
    );
}
