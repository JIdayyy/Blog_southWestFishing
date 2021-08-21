import { Dispatch, SetStateAction } from "react";

interface IProps {
    setIsMenu: Dispatch<SetStateAction<boolean>>;
}

export function Burger({ setIsMenu }: IProps): JSX.Element {
    return (
        <button
            onClick={() => setIsMenu((c: boolean) => !c)}
            id="menuToggle"
            className="fixed top-20 right-20 z-9999"
        >
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
        </button>
    );
}
