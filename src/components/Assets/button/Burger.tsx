import { Dispatch, SetStateAction } from "react";

interface IProps {
    setIsMenu: Dispatch<SetStateAction<boolean>>;
}

export default function Burger({ setIsMenu }: IProps): JSX.Element {
    return (
        <button
            type="button"
            onClick={() => setIsMenu((c: boolean) => !c)}
            id="menuToggle"
            className="fixed top-20 left-2 md:left-20 z-9999"
        >
            <input type="checkbox" />
            <span />
            <span />
            <span />
        </button>
    );
}
