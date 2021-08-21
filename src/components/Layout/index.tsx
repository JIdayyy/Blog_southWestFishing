import { Burger } from "@components/Assets/button/Burger";
import Header from "@components/Header";
import Column from "@components/Main/Column";
import Menu from "@components/Menu";
import Head from "next/head";
import { useState } from "react";

interface IProps {
    children: React.ReactNode;
    page: string;
}

export function Layout({ children, page }: IProps): JSX.Element {
    const [isMenu, setIsMenu] = useState<boolean>(false);
    return (
        <div
            style={{ backgroundColor: "black" }}
            className="w-screen min-h-screen overflow-x-hidden  flex flex-col"
        >
            <Head>
                <title>{page}</title>
            </Head>
            <div className="w-screen overflow-y-auto h-full flex flex-col">
                <Burger setIsMenu={setIsMenu} />
                {isMenu && <Menu />}
                <Header />
                <div className="flex lg:flex-row  flex-col mt-60 w-full items-start h-full align-middle  justify-around">
                    {children}
                    <Column />
                </div>
            </div>
        </div>
    );
}
