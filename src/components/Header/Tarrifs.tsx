import FadeIn from "@components/AnimatedComponents/FadeIn";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const prestations = [
    "Enseignement et guidage",
    "Prêt du matériel spécifique",
    "Consomable leurre",
    "Fil",
    "Plombs",
    "Appâts",
    "...",
];
const tarifs = [
    {
        number: "1p",
        journee: "120€",
        demiJournee: "70€",
        sejour: "Sur demande",
    },
    {
        number: "2p",
        journee: "100€",
        demiJournee: "60€",
        sejour: "Sur demande",
    },
    {
        number: "3p & Groupes",
        journee: "80€",
        demiJournee: "50€",
        sejour: "Sur demande",
    },
    {
        number: "Stage découverte (-12 ans)",
        journee: "40€",
        demiJournee: "25€",
        sejour: "Sur demande",
    },
];
export default function Tarrifs(): JSX.Element {
    const [selected, setSelected] = useState<string>("1p");
    const [displayed, setDisplayed] = useState<typeof tarifs[0]>();

    useEffect(() => {
        console.log(selected);
        if (selected === "1p") {
            setDisplayed(tarifs[0]);
        }
        if (selected === "2p") {
            setDisplayed(tarifs[1]);
        }
        if (selected === "3p & Groupes") {
            setDisplayed(tarifs[2]);
        }
        if (selected === "Stage découverte (-12 ans)") {
            setDisplayed(tarifs[3]);
        }
    }, [selected]);

    const handleSelect = (e) => setSelected(e.target.value);

    return (
        <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -1000 }}
            className="  text-white bg-black absolute rounded-4 z-9999 w-full md:w-3/5  md:flex flex-col border-4 border-gray-700"
        >
            <div className="w-full  bg-gray-600 flex items-center align-middle justify-between p-10 shadow-8 ">
                <span className="font-semibold">Tarrifs</span>
                <select
                    onChange={handleSelect}
                    className="bg-gray-600 border-white border rounded-2 focus:outline-none outline-none"
                >
                    {tarifs.map((choice) => (
                        <option
                            className="my-1 rounded-4 "
                            value={choice.number}
                        >
                            {choice.number}
                        </option>
                    ))}
                </select>
            </div>
            <div className="w-full h-full flex items-center align-middle justify-between p-10 shadow-inner">
                <ul>
                    <h1 className="text-10 font-bold my-4">
                        Compris dans les prestations :
                    </h1>
                    {prestations.map((prestation) => (
                        <li className="text-10 my-2 w-full">{prestation}</li>
                    ))}
                </ul>
                <ul>
                    <li>
                        Journée :
                        <span className="text-xl">
                            {displayed && displayed.journee}
                        </span>
                    </li>
                    <li>
                        Demi Journée :
                        <span className="text-xl">
                            {displayed && displayed.demiJournee}
                        </span>
                    </li>
                    <li>
                        Séjour :
                        <span className="text-xl">
                            {displayed && displayed.sejour}
                        </span>
                    </li>
                </ul>
                <Link href="/">
                    <motion.button
                        className=" outline-none"
                        whileHover={{ scale: 1.005 }}
                        whileTap={{ scale: 1 }}
                    >
                        <FadeIn delay={0.2}>
                            <Image
                                className="animate-pulse"
                                src="/images/logo_southwestfishing.png"
                                width={150}
                                height={150}
                            />
                        </FadeIn>
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    );
}
