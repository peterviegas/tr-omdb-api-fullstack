import React from 'react';
import { NavLink } from 'react-router-dom';

const ComponentNavlink: React.FC = () => {
    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li className='nav__item'>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? 'link--active' : 'link'
                        }
                    >
                        {' '}
                        Home{' '}
                    </NavLink>
                </li>

                <li className='nav__item'>
                    <NavLink
                        to='/movielist'
                        className={({ isActive }) =>
                            isActive ? 'link--active' : 'link'
                        }
                    >
                        {' '}
                        MoviesList{' '}
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
    );
};

export default ComponentNavlink;
