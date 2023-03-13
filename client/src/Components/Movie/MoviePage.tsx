import React, { useContext } from 'react';
import { MovieType } from './Type/MovieType.type';
import { MoviesContext } from './Context/MoviesContext';
import { RenderMoviesList } from './RenderMoviesList';
import MovieCard from './MovieCard';
import { useLocation } from 'react-router-dom';
const MoviePage: React.FC = () => {
    const { movies } = useContext(MoviesContext);
    const location = useLocation();
    const { pathname } = location;
    const imdbID = pathname.split('/')[3];
    const searchedMovieName = pathname.split('/')[2];

    const unselectedMovies = (id: string): Array<MovieType> => {
        const movieList: Array<MovieType> = movies.filter(
            (movie: MovieType) => movie.imdbID !== id
        );
        return movieList;
    };

    const onClickHandler = (e: React.MouseEvent) => {
        e.preventDefault();
        const { pathname } = location;
        unselectedMovies(pathname.split('/')[2]);
    };

    return (
        <div className='moviePage'>
            <MovieCard />
            <h3 className='moviePage__heading-3'>
                Other movies of your search list :
            </h3>
            <div className='moviePage__list'>
                {RenderMoviesList(
                    unselectedMovies(imdbID),
                    searchedMovieName,
                    onClickHandler
                )}
            </div>
        </div>
    );
};

export default MoviePage;
