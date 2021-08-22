import FadeIn from "@components/AnimatedComponents/FadeIn";
import Image from "next/image";
import Link from "next/link";
import ScaleWhileHover from "@components/AnimatedComponents/ScaleWhileHover";

import { useState } from "react";
import { motion } from "framer-motion";

const contactButtons = [
    { id: 1, name: "Tel", value: "06.33.45.32.34", image: "/icons/tel.png" },
    {
        id: 2,
        name: "Insta",
        value: "www.instagram.com",
        image: "/icons/insta.png",
    },
    {
        id: 3,
        name: "Mail",
        value: "southwestfishing@gmail.com",
        image: "/icons/mail.png",
    },
];

export default function Header(): JSX.Element {
    const [isShow, setIsShow] = useState(false);
    const [selected, setSelected] = useState<number | null>(null);
    return (
        <div className="w-full sm:h-320 h-full relative flex flex-col items-center align-middle justify-center">
            <div className="absolute top-20 left-28 z-10 flex items-start align-middle justify-between h-40 flex-col">
                {contactButtons.map((button) => (
                    <ScaleWhileHover className="flex" scale={1.01}>
                        <Image
                            onMouseEnter={() => {
                                setSelected(button.id);
                                setIsShow(true);
                            }}
                            onMouseLeave={() => {
                                setSelected(null);
                                setIsShow(false);
                            }}
                            className="my-6 cursor-pointer"
                            src={button.image}
                            width={15}
                            height={15}
                        />
                        {isShow && selected === button.id && (
                            <FadeIn className="text-10 mx-8 text-gray-600">
                                {button.value}
                            </FadeIn>
                        )}
                    </ScaleWhileHover>
                ))}
            </div>
            <Image src="/images/bg_southwestfishing.jpg" layout="fill" />

            <motion.div
                animate={{ y: 0 }}
                initial={{ y: -10 }}
                transition={{ delay: 0.2 }}
            >
                <Link href="/">
                    <motion.button
                        className=" outline-none"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FadeIn delay={0.2}>
                            <Image
                                className="animate-pulse"
                                src="/images/logo_southwestfishing.png"
                                width={300}
                                height={300}
                            />
                        </FadeIn>
                    </motion.button>
                </Link>
            </motion.div>
        </div>
    );
}
