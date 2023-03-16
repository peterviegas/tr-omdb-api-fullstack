import React from "react";
import { NavLink } from "react-router-dom";


const ComponentNotFound: React.FC = () =>

    <>

        <h2 className="subtitle has-text-danger"> Error 404 : Not Found! </h2>
        <li><NavLink to='/' > Go to Home </NavLink></li>

    </>

export default ComponentNotFound;