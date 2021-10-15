import React, { ReactElement } from "react";
import Link from "next/link";

export default function Navbar(): ReactElement {
    return (
        <div className="w-full h-36 bg-white z-99 fixed">
            <div className=" h-full text-black flex items-center align-middle justify-end font-extrabold shadow-10 w-full px-32">
                <Link href="/">
                    <button className="mx-4 outline-none focus:outline-none">
                        Accueil
                    </button>
                </Link>
                <Link href="/contact">
                    <button className="mx-4 outline-none focus:outline-none">
                        Contact
                    </button>
                </Link>
                <Link href="/tarifs">
                    <button className="mx-4 outline-none focus:outline-none">
                        Tarifs
                    </button>
                </Link>
            </div>
        </div>
    );
}
