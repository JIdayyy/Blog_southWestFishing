import FadeIn from "@components/AnimatedComponents/FadeIn";
import ScaleWhileHover from "@components/AnimatedComponents/ScaleWhileHover";
import Footer from "@components/Footer/Footer";
import Header from "@components/Header";
import Column from "@components/Main/Column";
import Head from "next/head";

import Image from "next/image";
import { useState } from "react";
interface IProps {
    children: React.ReactNode;
    page: string;
}

const contactButtons = [
    { id: 1, name: "Tel", value: "06.33.45.32.34", image: "/icons/tel.png" },
    {
        id: 2,
        name: "Insta",
        value: "www.instagram.com",
        image: "/icons/insta.png",
    },
    {
        id: 3,
        name: "Mail",
        value: "southwestfishing@gmail.com",
        image: "/icons/mail.png",
    },
];

export function Layout({ children, page }: IProps): JSX.Element {
    const [isShow, setIsShow] = useState(false);
    const [selected, setSelected] = useState<number | null>(null);
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
                <div className="h-24 text-grey-A200 flex items-center align-middle justify-between bg-gray-A400 w-full px-32">
                    <div className="md:left-24  z-10 flex relative items-start align-middle justify-between ">
                        {contactButtons.map((button) => (
                            <ScaleWhileHover className="flex mx-4" scale={1.01}>
                                <Image
                                    onMouseEnter={() => {
                                        setSelected(button.id);
                                        setIsShow(true);
                                    }}
                                    onMouseLeave={() => {
                                        setSelected(null);
                                        setIsShow(false);
                                    }}
                                    className="my-6 cursor-pointer"
                                    src={button.image}
                                    width={20}
                                    height={20}
                                />
                                {isShow && selected === button.id && (
                                    <FadeIn className="text-10 top-20 text-sm absolute text-gray-600">
                                        {button.value}
                                    </FadeIn>
                                )}
                            </ScaleWhileHover>
                        ))}
                    </div>
                    <div>
                        <button className="mx-4">Contact</button>
                        <button className="mx-4">Tarrifs</button>
                    </div>
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
