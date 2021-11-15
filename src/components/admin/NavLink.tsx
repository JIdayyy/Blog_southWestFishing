import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

interface IProps {
    link: { name: string; link: string; image: string }[];
}
export default function NavLink({ link }: IProps): JSX.Element {
    return (
        <>
            {link.map((linkItem) => (
                <Link passHref href={`${linkItem.link}`}>
                    <motion.div
                        whileHover={{ backgroundColor: "#2F4F4F" }}
                        className="cursor-pointer"
                    >
                        <button
                            type="button"
                            className="text-white border-b border-gray-900 text-left focus:outline-none outline-none flex items-start align-middle justify-between w-full text-13 z-40"
                        >
                            {linkItem.name}
                            <Image
                                src={linkItem.image}
                                width={30}
                                height={30}
                            />
                        </button>
                    </motion.div>
                </Link>
            ))}
        </>
    );
}
