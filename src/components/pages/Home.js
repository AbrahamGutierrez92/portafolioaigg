import React from "react";
import MainHome from "../MainHome";
import About from "../About";
import Portafolio from "../Portafolio";
import Held from "../Held.js";
import Skills from "../Skills";

function Home(){
    return(
        <>
        <MainHome/>
        <About/>
        <Portafolio/>
        <Held/>
        <Skills/>
        </>
    )
}

export default Home;