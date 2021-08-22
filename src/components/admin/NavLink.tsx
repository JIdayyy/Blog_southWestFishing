import Link from "next/link";
import { motion } from "framer-motion";
interface IProps {
    link: { name: string; link: string };
}
export default function NavLink({ link }: IProps): JSX.Element {
    return (
        <Link href={`${link.link}`}>
            <motion.div
                whileHover={{ scale: 1.01, backgroundColor: "rgb(75,0,130)" }}
                className="cursor-pointer"
            >
                <button className="text-white text-2xl z-40">
                    {link.name}
                </button>
            </motion.div>
        </Link>
    );
}
