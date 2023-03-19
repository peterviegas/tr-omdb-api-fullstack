import React from 'react';
import { NavLink } from 'react-router-dom';
import { MovieType } from '../Movie/Type/MovieType.type';
const noImage = require('../../Images/noImage.jpg');

interface RenderWatchListProp {
    movies: Array<MovieType>;
}

const RenderWatchList: React.FC<RenderWatchListProp> = ({ movies }) => {
    return (
        <>
            {movies.map((movie, i) => {
                const { Title, Year, imdbID, Poster } = movie;
                return (
                    <div key={imdbID} className='movielist__card'>
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
                                <h6 className='movieList__heading'>{`${Title}, ${Year}`}</h6>
                            </NavLink>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default RenderWatchList;
