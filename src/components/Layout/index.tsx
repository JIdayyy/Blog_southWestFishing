import Footer from "@components/Footer/Footer";
import Header from "@components/Header";
import Column from "@components/Main/Column";
import Head from "next/head";
import { useState } from "react";
import Navbar from "./Navbar";

interface IProps {
    children: React.ReactNode;
    page: string;
}

export function Layout({ children, page }: IProps): JSX.Element {
    return (
        <div className="max-w-screen bg-gray-200 min-h-screen overflow-x-hidden scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-800 flex flex-col">
            <Head>
                <title>{page}</title>
            </Head>
            <Navbar />
            <div className="w-screen  overflow-x-hidden h-full flex flex-col items-center align-middle justify-between">
                <Header />

                <div className="flex lg:flex-row  flex-col  w-full items-start h-full align-middle  justify-around">
                    {children}
                </div>
                <Footer />
            </div>
        </div>
    );
}
