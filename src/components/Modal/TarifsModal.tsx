import TarifsCard from "@components/Cards/tarifsCard";
import React, { Dispatch, ReactElement, SetStateAction } from "react";
import Image from "next/image";
import TarifsAssetsCard from "@components/Cards/TarifsAssetsCard";
import { motion } from "framer-motion";

const fakeTarifsSolo = [
    {
        id: "1",
        name: "1/2 Journée",
        value: "130€",
        category: "Solo",
    },
    {
        id: "2",
        name: "1 Journée",
        value: "190€",
        category: "Solo",
    },
    {
        id: "3",
        name: "2 Jours",
        value: "390€",
        category: "Solo",
    },
    {
        id: "3",
        name: "3 Jours",
        value: "570€",
        category: "Solo",
    },
    {
        id: "3",
        name: "Coup du soir / matin",
        value: "065€",
        category: "Solo",
    },
];
const fakeTarifsDuo = [
    {
        id: "1",
        name: "1/2 Journée",
        value: "100€",
        category: "Duo",
    },
    {
        id: "2",
        name: "1 Journée",
        value: "150€",
        category: "Duo",
    },
    {
        id: "3",
        name: "2 Jours",
        value: "280€",
        category: "Duo",
    },
    {
        id: "3",
        name: "3 Jours",
        value: "370€",
        category: "Duo",
    },
    {
        id: "3",
        name: "Coup du soir / matin",
        value: "045€",
        category: "Duo",
    },
];

const fakeTarifsKids = [
    {
        id: "1",
        name: "Journée de Stage",
        value: "60€",
        category: "Stage / Initiation",
    },
    {
        id: "2",
        name: "Journée d'Initiation",
        value: "30€",
        category: "Stage / Initiation",
    },
];

interface IProps {
    setIsModal: Dispatch<SetStateAction<boolean>>;
}

// make an array with 3 differents fakeTarifs

export default function TarifsModal({ setIsModal }: IProps): ReactElement {
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            className="w-full h-screen absolute z-9999 bg-opacity-75 border-black top-0 left-0 bg-black flex items-center align-middle justify-center"
        >
            <div className="  bg-white relative p-8 rounded-8 flex flex-col items-center align-middle justify-around">
                <button
                    type="button"
                    onClick={() => setIsModal(false)}
                    className="absolute outline-none focus:outline-none top-10 right-10"
                >
                    <Image
                        priority
                        placeholder="blur"
                        blurDataURL="/icons/cross.png"
                        src="/icons/cross.png"
                        width={15}
                        height={15}
                    />
                </button>
                <h1 className="text-14 my-10 text-gray-900 font-bold ">
                    Programme et Tarifs 2021 / 2022{" "}
                    <Image
                        priority
                        placeholder="blur"
                        blurDataURL="/images/hook.png"
                        src="/images/hook.png"
                        width={20}
                        height={30}
                    />
                </h1>
                <div className="flex w-full min-w-max  align-middle flex-wrap justify-between">
                    <TarifsCard tarif={fakeTarifsSolo} />
                    <TarifsCard tarif={fakeTarifsDuo} />
                    <TarifsCard tarif={fakeTarifsKids} />
                    <TarifsAssetsCard />
                </div>
            </div>
        </motion.div>
    );
}
