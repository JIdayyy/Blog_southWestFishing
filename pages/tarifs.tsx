import Tarrifs from "@components/Header/Tarrifs";
import React, { ReactElement } from "react";

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
        value: "65€",
        category: "Solo",
    },
];
const fakeTarifsDuo = [
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
        value: "65€",
        category: "Solo",
    },
];

const fakeTarifsKids = [
    {
        id: "1",
        name: "Journée de Stage",
        value: "130€",
        category: "Kids",
    },
    {
        id: "2",
        name: "Journée d'Initiation",
        value: "190€",
        category: "Kids",
    },
];

// make an array with 3 differents fakeTarifs

export default function Tarifs(): ReactElement {
    return (
        <div className="w-full h-full flex items-center align-middle justify-center">
            <Tarrifs />
            <div>
                <h1>Programme et Tarifs 2021 / 2022</h1>
                <div className="flex flex-col items-center align-middle justify-center">
                    <span>Solo</span>
                    <span />
                </div>
            </div>
        </div>
    );
}
