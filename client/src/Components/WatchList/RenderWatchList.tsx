import React from 'react';
import { NavLink } from 'react-router-dom';
import { MovieType } from '../Movie/Type/MovieType.type';
const noImage = require('../../Images/noImage.jpg');

interface RenderMoviesListProp {
    movies: Array<MovieType>;
}

const RenderWatchList: React.FC<RenderMoviesListProp> = ({ movies }) => {
    return (
        <>
            {movies.map((movie) => {
                const { Title, Year, imdbID, Poster } = movie;
                return (
                    <div className='movielist__card'>
                        <div
                            key={imdbID}
                            className='movieList__item'
                            onClick={() => {}}
                        >
                            <NavLink
                                to={`/movie/${Title}/${imdbID}`}
                                className='movieList__link'
                            >
                                <div className='movieList__img-container'>
                                    <img
                                        className='movieList__img'
                                        src={
                                            Poster === 'N/A' ? noImage : Poster
                                        }
                                        alt={Title}
                                    />
                                </div>
                            </NavLink>
                            <button className='btn__movieList'>Remove</button>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default RenderWatchList;
