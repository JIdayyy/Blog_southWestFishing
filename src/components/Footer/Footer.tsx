import Modal from "@components/Modal/Modal";
import { MouseEvent, useState } from "react";

function Footer(): JSX.Element {
    const [isAdminLogin, setIsAdminLogin] = useState<boolean>(false);

    const handleClick = (e: MouseEvent) => {
        e.preventDefault();
        setIsAdminLogin(true);
    };

    return (
        <div className="w-full h-32 flex items-center align-middle justify-center  bg-gray-900">
            {isAdminLogin && <Modal setIsAdminLogin={setIsAdminLogin} />}
            <div>
                <button onClick={handleClick}>
                    <span className="w-full text-white ">
                        J.Digital Solutions ©
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Footer;
