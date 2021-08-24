import Title from "@components/Assets/Title/Title";

import { motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import onClickOutside from "react-onclickoutside";
function Menu({ setIsMenu }): JSX.Element {
    const variants = {
        open: { width: "25%" },
        close: { width: "0%" },
    };
    const router = useRouter();
    Menu.handleClickOutside = () => setIsMenu(false);
    return (
        <motion.div
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
const clickOutsideConfig = {
    handleClickOutside: () => Menu.handleClickOutside,
};

export default onClickOutside(Menu, clickOutsideConfig);
