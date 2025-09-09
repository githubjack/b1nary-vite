import React from "react";
import HeroHeader from "../components/HeroHeader/HeroHeader";
import Bento from "../components/Bento/Bento";
import Marquee from "../components/Marquee/Marquee";
import Recent from "../components/Recent/Recent";



const Home: React.FC = () => {
    return (
        <>
            <HeroHeader />
            <Bento />
            <Marquee />
            <Recent />
        </>
    );
};

export default Home;
