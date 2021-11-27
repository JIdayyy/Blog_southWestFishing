import FadeIn from "@components/AnimatedComponents/FadeIn";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

export default function Header(): JSX.Element {
    return (
        <div className="w-full sm:h-320 h-full relative flex flex-col items-center align-middle justify-center">
            <Image
                src="/images/bg_southwestfishing.jpg"
                priority
                placeholder="blur"
                blurDataURL="/images/bg_southwestfishing.jpg"
                layout="fill"
            />
            <motion.div
                animate={{ y: 0 }}
                initial={{ y: -10 }}
                transition={{ delay: 0.2 }}
            >
                <Link passHref href="/">
                    <motion.button
                        className=" outline-none"
                        whileHover={{ scale: 1.005 }}
                        whileTap={{ scale: 1 }}
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
