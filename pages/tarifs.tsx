import Tarrifs from "@components/Header/Tarrifs";
import React, { ReactElement } from "react";

interface Props {}

export default function Tarifs({}: Props): ReactElement {
    return (
        <div className="w-full h-full flex items-center align-middle justify-center">
            <Tarrifs />
        </div>
    );
}
