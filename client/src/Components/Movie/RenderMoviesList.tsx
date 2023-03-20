import React from 'react';
import { NavLink } from 'react-router-dom';
import ErrorComponent from '../ErrorHandler/ErrorComponent';
import { MovieType } from './Type/MovieType.type';
import { ErrorMessagesAPI } from '../ErrorHandler/ErrorMessages';
const { errorMovie } = ErrorMessagesAPI;
const noImage = require('../../Images/noImage.jpg');

interface RenderMoviesListProp {
    movies: Array<MovieType>;
    searchedMovieName: string;
    onClick: (e: React.MouseEvent) => void;
}

const RenderMoviesList: React.FC<RenderMoviesListProp> = ({
    movies,
    searchedMovieName,
    onClick,
}) => {
    return (
        <>
            {movies.length === 0 ? (
                <ErrorComponent>{errorMovie}</ErrorComponent>
            ) : (
                movies.map((movie) => {
                    const { Title, Year, imdbID, Poster } = movie;
                    return (
                        <div
                            key={imdbID}
                            className='movieList__item'
                            onClick={onClick}
                        >
                            <NavLink
                                to={`/movie/${searchedMovieName}/${imdbID}`}
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
                    );
                })
            )}
        </>
    );
};

export default RenderMoviesList;
