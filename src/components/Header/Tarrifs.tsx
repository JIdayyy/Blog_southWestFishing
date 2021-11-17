import FadeIn from "@components/AnimatedComponents/FadeIn";
import { motion } from "framer-motion";
import { ChangeEvent, useEffect, useState } from "react";
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
export default function Tarifs(): JSX.Element {
    return (
        <div className="w-full p-16 flex justify-start flex-col ">
            <h1 className="font-extrabold text-12 mb-28">
                Programme et Tarifs 2021 / 2021
            </h1>
            <div className="w-full">
                <span className="font-bold  text-14 text-grey-900">
                    1 - Prestations :
                </span>
                <ul className="list-decimal font-400 mx-20">
                    <li className="">Enseignement et guidage</li>
                    <li className="">Prêt du matériel spécifique</li>
                    <li className="">Consomable leurre</li>
                    <li className="">Fil</li>
                    <li className="">Plombs</li>
                    <li className="">Appâts</li>
                    <li className="">...</li>
                </ul>
            </div>

            <div className="my-10">
                <span className="font-bold  text-14 text-grey-900 ">
                    2 - Tarifs :
                </span>
                <div className="my-5">A - Personne seule :</div>
                <ul className="list-decimal font-400 mx-20">
                    <li>1/2 Journée : 130</li>
                    <li>1 Jour : 190</li>
                    <li>2 Jours : 390</li>
                    <li>3 Jours : 390</li>
                    <li>Coup du soir/matin : 65</li>
                </ul>
            </div>
            <div className="my-10">
                <div className="my-5 ">B - Duo :</div>
                <ul className="list-decimal font-400 mx-20">
                    <li>1/2 Journée : 100</li>
                    <li>1 Jour : 150</li>
                    <li>2 Jours : 280</li>
                    <li>3 Jours : 370</li>
                    <li>Coup du soir/matin : 45</li>
                </ul>
            </div>
            <div className="my-10">
                <div className="my-5 ">C - Stages Enfants / Initiation :</div>
                <ul className="list-decimal font-400 mx-20">
                    <li>Journée de Stage : 45</li>
                    <li>Journée d&apos;initiation : 30</li>
                </ul>
            </div>

            <div className="my-10">
                <span className="font-bold  text-14 text-grey-900 ">
                    3 - Horaires
                </span>
                <ul className="list-decimal font-400 mx-20">
                    <li className="">Coup du matin : 6h - 9h</li>
                    <li className="">Journée : 9h - 17h</li>
                    <li className="">1/2 Journée : 9h - 13H / 14h - 18h</li>
                    <li className="">Cours du soir : 18h - 21h</li>
                    <li className="">Initiation enfants : 2H</li>
                </ul>
            </div>
            <div className="my-10">
                <span className="font-bold text-14  text-grey-900">
                    4 - Divers
                </span>
                <ul className="list-decimal font-400 mx-20">
                    <li className="">Sortie Bateau + 20e</li>
                </ul>
            </div>
            <span className="text-10">
                ( Tarifs en Euro, plus de renseignement par téléphone.)
            </span>
        </div>
    );
}
