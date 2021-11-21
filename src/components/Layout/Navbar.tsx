import React, { ReactElement, useState } from "react";
import Link from "next/link";
import TarifsModal from "@components/Modal/TarifsModal";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar(): ReactElement {
    const [isModal, setIsModal] = useState<boolean>(false);
    return (
        <motion.div className="w-full h-36 hidden md:flex bg-white z-999   items-start justify-start align-middle shadow-10">
            <div className="whitespace-nowrap h-full font-bold flex items-center mx-20 justify-center align-middle">
                South West Fishing
            </div>
            {isModal && (
                <AnimatePresence>
                    <TarifsModal setIsModal={setIsModal} />
                </AnimatePresence>
            )}
            <div className=" h-full text-black flex items-center align-middle justify-end  w-full px-32">
                <Link passHref href="/">
                    <button
                        type="button"
                        className="mx-4 font-bold text-black  outline-none focus:outline-none"
                    >
                        Accueil
                    </button>
                </Link>
                <Link passHref href="/contact">
                    <button
                        type="button"
                        className="mx-4 font-bold text-black  outline-none focus:outline-none"
                    >
                        Contact
                    </button>
                </Link>

                <button
                    onClick={() => setIsModal(true)}
                    type="button"
                    className="mx-4 font-bold text-black  outline-none focus:outline-none"
                >
                    Tarifs
                </button>
            </div>
        </motion.div>
    );
}
