import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
interface IProps {
    link: { name: string; link: string; image: string };
}
export default function NavLink({ link }: IProps): JSX.Element {
    return (
        <Link href={`${link.link}`}>
            <motion.div
                whileHover={{ backgroundColor: "#2F4F4F" }}
                className="cursor-pointer"
            >
                <button className="text-white border-b border-gray-900 text-center focus:outline-none outline-none flex items-center align-middle justify-center w-full text-13 z-40">
                    <Image src={link.image} width={30} height={30} />{" "}
                    {link.name}
                </button>
            </motion.div>
        </Link>
    );
}
