import React from "react";
import { useRouter } from "next/router";

function Modal(): JSX.Element {
    const router = useRouter();
    return (
        <div className="w-screen h-screen bg-gray-900 text-grey-A200 fixed top-0 flex flex-col items-center justify-center align-middle z-9999">
            <form className="flex-col flex" action="">
                <label htmlFor="">Login :</label>
                <input
                    type="text"
                    className="my-1 bg-gray-A700 border-gray-900 outline-none px-2"
                />
                <label htmlFor="">Password :</label>
                <input
                    type="text"
                    className="my-1 bg-gray-A700 border-gray-900 outline-none px-2"
                />
                <button onClick={() => router.push("/myadmin")}>LOGIN</button>
            </form>
        </div>
    );
}

export default Modal;
