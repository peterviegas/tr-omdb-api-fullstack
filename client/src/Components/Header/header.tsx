import React from "react";
import ComponentNavlink from "../navlink";
import ComponentHeaderImages from "./header_images";

const ComponentHeader: React.FC = () =>

    <header className="header">

        <ComponentHeaderImages />
        <h2 className="text__center" > PNGC IMDB </h2>
        <p className="text__center"> The Best IMDB Search Site</p>
        <ComponentNavlink />

    </header>

export default ComponentHeader;