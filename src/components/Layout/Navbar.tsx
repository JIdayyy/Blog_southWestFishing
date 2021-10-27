import React, { ReactElement, useState } from "react";
import Link from "next/link";

export default function Navbar(): ReactElement {
    return (
        <div className="w-full h-36 hidden md:flex bg-white z-9999 fixed  items-start justify-start align-middle shadow-10">
            <div className="whitespace-nowrap h-full font-bold flex items-center mx-20 justify-center align-middle">
                South West Fishing
            </div>

            <div className=" h-full text-black flex items-center align-middle justify-end  w-full px-32">
                <Link href="/">
                    <button className="mx-4 font-bold text-black  outline-none focus:outline-none">
                        Accueil
                    </button>
                </Link>
                <Link href="/contact">
                    <button className="mx-4 font-bold text-black  outline-none focus:outline-none">
                        Contact
                    </button>
                </Link>
                <Link href="/tarifs">
                    <button className="mx-4 font-bold text-black  outline-none focus:outline-none">
                        Tarifs
                    </button>
                </Link>
            </div>
        </div>
    );
}
