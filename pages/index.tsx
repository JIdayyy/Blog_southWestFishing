import Header from "@components/Header";
import Main from "@components/Main";
import Column from "@components/Main/Column";
import React from "react";

const Home: React.FC = () => {
    return (
        <div
            style={{ backgroundColor: "black" }}
            className="w-screen min-h-full flex flex-col bg-black"
        >
            <Header />
            <div className="w-screen flex md:flex-row flex-col my-48  justify-around">
                <Main />
                <Column />
            </div>
        </div>
    );
};

export default Home;
