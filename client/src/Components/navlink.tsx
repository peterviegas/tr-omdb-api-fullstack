import React from "react";
import { NavLink } from "react-router-dom";

const ComponentNavlink: React.FC = () => {


    return (

        <nav>

            <ul className="text__center">

                <li className="navlink"><NavLink to='/' className={({ isActive }) => isActive ? 'link--active' : 'link'}             > Home </NavLink></li>

                <li className="navlink"><NavLink to='/movielist' className={({ isActive }) => isActive ? 'link--active' : 'link'} > Movies </NavLink></li>

                <li className="navlink"><NavLink to='/about' className={({ isActive }) => isActive ? 'link--active' : 'link'}   > About </NavLink></li>

                <li className="navlink"><NavLink to='/team' className={({ isActive }) => isActive ? 'link--active' : 'link'}   > Team </NavLink></li>

            </ul>

        </nav>

    );

};

export default ComponentNavlink;