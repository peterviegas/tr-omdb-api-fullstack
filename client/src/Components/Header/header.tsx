import React from 'react';
import { NavLink } from 'react-router-dom';
import ComponentNavlink from '../Navlink/navlink';
const logo = require('../../Images/film.png');

const ComponentHeader: React.FC = () => (
    <header className='header'>
        <div className='header__logobox'>
            <NavLink to='/' className='header__logo'>
                PNGC IMDB
                <img
                    className='header__logo-img'
                    src={logo}
                    alt='PNGC IMDB logo'
                />
            </NavLink>
        </div>

        <ComponentNavlink />
    </header>
);

export default ComponentHeader;
