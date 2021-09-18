import Modal from "@components/Modal/Modal";
import React, { useState } from "react";

function Footer(): JSX.Element {
    const [isAdminLogin, setIsAdminLogin] = useState<boolean>(false);
    return (
        <div className="w-full h-32 bg-gray-900 flex items-center align-middle justify-center">
            {isAdminLogin && <Modal />}
            <button
                className="text-10 text-gray"
                onClick={() => setIsAdminLogin(true)}
            >
                J.Digital Solutions
            </button>
        </div>
    );
}

export default Footer;
