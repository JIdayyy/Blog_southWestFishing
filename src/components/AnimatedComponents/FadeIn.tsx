import { motion } from "framer-motion";

interface IProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export default function FadeIn({
    children,
    className = "",
    delay = 0,
}: IProps): JSX.Element {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
