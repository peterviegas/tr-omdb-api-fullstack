import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
const openBtn = require('../Images/menu.png');
const closeBtn = require('../Images/close.png');

const ComponentNavlink: React.FC = () => {
    const [clicked, setClicked] = useState<boolean>(false);
    return (
        <>
            <div
                className={clicked ? 'hidden' : 'nav__smalldevices'}
                onClick={() => {
                    setClicked(!clicked);
                }}
            >
                <img
                    src={openBtn}
                    alt='menu button'
                    onClick={() => {
                        setClicked(!clicked);
                    }}
                />
            </div>
            <div className={clicked ? 'nav__smalldevices' : 'hidden'}>
                <img
                    src={closeBtn}
                    alt='close button'
                    onClick={() => {
                        setClicked(!clicked);
                    }}
                />
            </div>

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
                            to='/wishlist'
                            className={({ isActive }) =>
                                isActive ? 'link--active' : 'link'
                            }
                        >
                            Wishlist
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
