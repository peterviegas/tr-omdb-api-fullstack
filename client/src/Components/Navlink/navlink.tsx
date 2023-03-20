import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const openBtn = require('../../Images/menu.png');
const closeBtn = require('../../Images/close.png');
const logo = require('../../Images/film.png');

const ComponentNavlink: React.FC = () => {
    const [clicked, setClicked] = useState<boolean>(false);
    const [clickedLink, setClickedLink] = useState<boolean>(false);
    return (
        <>
            <div
                className={clicked ? 'hidden' : 'nav__smalldevices'}
                onClick={() => {
                    setClicked(!clicked);
                    setClickedLink(!setClickedLink);
                }}
            >
                <img
                    src={openBtn}
                    alt='menu button'
                    onClick={() => {
                        setClicked(!clicked);
                        setClickedLink(!setClickedLink);
                    }}
                />
            </div>
            <div className={clicked ? 'nav__smalldevices' : 'hidden'}>
                <img
                    src={closeBtn}
                    alt='close button'
                    onClick={() => {
                        setClicked(!clicked);
                        setClickedLink(!setClickedLink);
                    }}
                />
            </div>
            <nav
                className={
                    clicked && !clickedLink ? 'navMenu' : 'navMenu--hidden'
                }
            >
                <ul className='navMenu__list'>
                    <header className='navMenu__header'>
                        <div className='navMenu__logobox'>
                            <NavLink
                                to='/'
                                className='navMenu__logo'
                                onClick={() => {
                                    setClickedLink(true);
                                    setClicked(!clicked);
                                }}
                            >
                                PNGC IMDB
                                <img
                                    className='navMenu__logo-img'
                                    src={logo}
                                    alt='PNGC IMDB logo'
                                />
                            </NavLink>
                        </div>
                    </header>
                    <li className='navMenu__item'>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                isActive ? 'link--active' : 'link'
                            }
                            onClick={() => {
                                setClickedLink(true);
                                setClicked(!clicked);
                            }}
                        >
                            Home
                        </NavLink>
                    </li>

                    <li className='navMenu__item'>
                        <NavLink
                            to='/watchlist'
                            className={({ isActive }) =>
                                isActive ? 'link--active' : 'link'
                            }
                            onClick={() => {
                                setClickedLink(true);
                                setClicked(!clicked);
                            }}
                        >
                            Watchlist
                        </NavLink>
                    </li>

                    <li className='navMenu__item'>
                        <NavLink
                            to='/about'
                            className={({ isActive }) =>
                                isActive ? 'link--active' : 'link'
                            }
                            onClick={() => {
                                setClickedLink(true);
                                setClicked(!clicked);
                            }}
                        >
                            About
                        </NavLink>
                    </li>

                    <li className='navMenu__item'>
                        <NavLink
                            to='/team'
                            className={({ isActive }) =>
                                isActive ? 'link--active' : 'link'
                            }
                            onClick={() => {
                                setClickedLink(true);
                                setClicked(!clicked);
                            }}
                        >
                            {' '}
                            Team{' '}
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <nav className='nav'>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                isActive ? 'link--active' : 'link'
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li className='nav__item'>
                        <NavLink
                            to='/watchlist'
                            className={({ isActive }) =>
                                isActive ? 'link--active' : 'link'
                            }
                        >
                            Watchlist
                        </NavLink>
                    </li>

                    <li className='nav__item'>
                        <NavLink
                            to='/about'
                            className={({ isActive }) =>
                                isActive ? 'link--active' : 'link'
                            }
                        >
                            {' '}
                            About{' '}
                        </NavLink>
                    </li>

                    <li className='nav__item'>
                        <NavLink
                            to='/team'
                            className={({ isActive }) =>
                                isActive ? 'link--active' : 'link'
                            }
                        >
                            {' '}
                            Team{' '}
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default ComponentNavlink;
