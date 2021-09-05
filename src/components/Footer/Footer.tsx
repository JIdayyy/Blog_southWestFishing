import Modal from "@components/Modal/Modal";
import React, { useState } from "react";

function Footer(): JSX.Element {
    const [isAdminLogin, setIsAdminLogin] = useState<boolean>(false);
    return (
        <div className="w-full h-32 bg-gray-900">
            {isAdminLogin && <Modal />}
            <button onClick={() => setIsAdminLogin(true)}>CLICK</button>
        </div>
    );
}

export default Footer;
