import { motion } from "framer-motion";

interface IProps {
    scale: number;
    children: React.ReactNode;
    className: string;
}

export default function ScaleWhileHover({
    scale,
    children,
    className,
}: IProps): JSX.Element {
    return (
        <motion.div className={className} whileHover={{ scale }}>
            {children}
        </motion.div>
    );
}
