import React, { ReactElement } from "react";
import Image from "next/image";

const tarifsAssets = [
    {
        id: "1",
        name: "1/2 Journée",
        value: "6h - 9h",
        category: "Horaires",
    },
    {
        id: "2",
        name: "1 Journée",
        value: "9h - 17h",
        category: "Horaires",
    },
    {
        id: "3",
        name: "2 Jours",
        value: "9h - 13h / 14h - 18h",
        category: "Horaires",
    },
    {
        id: "3",
        name: "3 Jours",
        value: "18h - 21h",
        category: "Horaires",
    },
    {
        id: "3",
        name: "Coup du soir / matin",
        value: "2h",
        category: "Horaires",
    },
];

export default function TarifsAssetsCard(): ReactElement {
    return (
        <div className="shadow-md text-10 w-full flex flex-col  my-10 items-start justify-start rounded-4 overflow-hidden">
            <span className="w-full text-18 bg-blue-600 text-white flex items-center align-middle justify-center">
                {tarifsAssets[0].category}
            </span>
            <div className="w-full flex flex-col p-4">
                {tarifsAssets.map((tarifItem) => (
                    <span className="w-full my-4 flex justify-between items-center align-middle">
                        <span className="flex items-center align-middle justify-center">
                            <Image
                                src="/icons/arrowR.png"
                                width={20}
                                height={20}
                            />
                            {tarifItem.name}
                        </span>
                        <span className="mx-6  px-3 py-2 ">
                            {tarifItem.value}
                        </span>
                    </span>
                ))}
            </div>
        </div>
    );
}
