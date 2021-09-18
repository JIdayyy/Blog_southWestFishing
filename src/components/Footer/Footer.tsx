import Modal from "@components/Modal/Modal";
import { useState } from "react";

function Footer(): JSX.Element {
    const [isAdminLogin, setIsAdminLogin] = useState<boolean>(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsAdminLogin(true);
    };

    return (
        <div className="w-full h-32  bg-gray-900">
            {isAdminLogin && <Modal setIsAdminLogin={setIsAdminLogin} />}
            <button onClick={handleClick}>CLICK</button>
        </div>
    );
}

export default Footer;
