import React from 'react';
import { NavLink } from 'react-router-dom';
const logo = require('../../Images/film.png');

const ComponentFooter: React.FC = () => (
    <footer className='footer'>
        <NavLink to='/' className='footer__logo'>
            PNGC IMDB
            <img className='footer__logo-img' src={logo} alt='PNGC IMDB logo' />
        </NavLink>
        <h6 className='footer__heading3'> © 2023 PNGC</h6>
    </footer>
);

export default ComponentFooter;
