import Footer from "@components/Footer/Footer";
import Header from "@components/Header";
import Menu from "@components/Menu";
import TarifsModal from "@components/Modal/TarifsModal";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import Navbar from "./Navbar";

interface IProps {
    children: React.ReactNode;
    page: string;
}

export default function Layout({ children, page }: IProps): JSX.Element {
    const [isMenu, setIsMenu] = useState(false);
    const [isModal, setIsModal] = useState<boolean>(false);
    return (
        <div className="max-w-screen bg-gray-200 min-h-screen overflow-x-hidden relative scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-800 flex flex-col">
            <Head>
                <title>{page}</title>
            </Head>
            <div className="w-full relative overflow-x-hidden h-full flex flex-col items-center align-middle justify-between">
                <Navbar setIsModal={setIsModal} />
                {isModal && (
                    <AnimatePresence>
                        <TarifsModal setIsModal={setIsModal} />
                    </AnimatePresence>
                )}
                <Header />
                {isMenu && <Menu setIsMenu={setIsMenu} />}

                <div className="flex   flex-col  w-full items-center h-full  min-h-400 justify-around">
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    );
}
