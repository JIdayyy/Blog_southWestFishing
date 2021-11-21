import React, { ReactElement } from "react";
import Image from "next/image";

interface Props {
    tarif: ITarif[];
}

export default function tarifsCard({ tarif }: Props): ReactElement {
    return (
        <div className="shadow-md flex flex-col items-start justify-start rounded-4 overflow-hidden">
            <span className="w-full text-18 bg-blue-600 text-white flex items-center align-middle justify-center">
                {tarif[0].category}
            </span>
            <div className="w-full flex flex-col p-4">
                {tarif.map((tarifItem) => (
                    <span className="w-full my-4 flex justify-between items-center align-middle">
                        <span className="flex items-center align-middle justify-center">
                            <Image
                                src="/icons/arrowR.png"
                                width={20}
                                height={20}
                            />
                            {tarifItem.name}
                        </span>
                        <span className="shadow-sm mx-6 border-1 px-3 py-2 border-gray-700 rounded-2">
                            {tarifItem.value}
                        </span>
                    </span>
                ))}
            </div>
        </div>
    );
}
