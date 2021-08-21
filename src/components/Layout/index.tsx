import { Burger } from "@components/Assets/button/Burger";
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
            className="w-screen min-h-screen flex flex-col"
        >
            <Head>
                <title>{page}</title>
            </Head>
            <div className="w-screen min-h-screen flex flex-col">
                {" "}
                <Burger setIsMenu={setIsMenu} />
                {isMenu && <Menu />}
                {children}
            </div>
        </div>
    );
}
