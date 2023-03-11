import React from "react";
import ComponentNavlink from "../navlink";


const ComponentHeader: React.FC = () =>

    <header className="header">


        <h2 className="text__center" > PNGC IMDB </h2>
        <p className="text__center"> The Best IMDB Search Site</p>
        <ComponentNavlink />

    </header>

export default ComponentHeader;