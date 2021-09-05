import { Burger } from "@components/Assets/button/Burger";
import Footer from "@components/Footer/Footer";
import Header from "@components/Header";
import Column from "@components/Main/Column";
import Menu from "@components/Menu";
import Head from "next/head";
import { useRef, useState } from "react";

interface IProps {
    children: React.ReactNode;
    page: string;
}

export function Layout({ children, page }: IProps): JSX.Element {
    return (
        <div
            style={{ backgroundColor: "black" }}
            className="max-w-screen min-h-screen overflow-x-hidden scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 flex flex-col"
        >
            <Head>
                <title>{page}</title>
            </Head>
            <div className="w-screen  overflow-x-hidden h-full flex flex-col">
                <Header />
                <div className="h-24 text-white flex items-center align-middle justify-end bg-gray-A400 w-full px-32">
                    <button className="mx-4">Contact</button>
                    <button className="mx-4">Tarrifs</button>
                </div>
                <div className="flex lg:flex-row  flex-col mt-60 w-full items-start h-full align-middle  justify-around">
                    {children}
                    <Column />
                </div>
                <Footer />
            </div>
        </div>
    );
}
