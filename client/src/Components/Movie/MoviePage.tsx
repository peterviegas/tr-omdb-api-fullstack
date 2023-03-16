import React, { useContext } from 'react';
import { MovieType } from './Type/MovieType.type';
import { MoviesContextType, MoviesContext } from './Context/MoviesContext';
import RenderMoviesList from './RenderMoviesList';
import MovieCard from './MovieCard';
import { useLocation } from 'react-router-dom';
import MUIPagination from '../Pagination/MUIPagination';

const MoviePage: React.FC = () => {
    const { movies, errorMsg, count, page, onChange } =
        useContext<MoviesContextType>(MoviesContext);
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
            <h3 className='heading__3'>{'Similar movies you may like'}</h3>
            <div className='pagination__down-arrow'></div>
            <MUIPagination count={count} page={page} onChange={onChange} />
            <div className='moviePage__list'>
                <RenderMoviesList
                    movies={unselectedMovies(imdbID)}
                    searchedMovieName={searchedMovieName}
                    onClick={onClickHandler}
                />
            </div>
            <MUIPagination count={count} page={page} onChange={onChange} />
        </div>
    );
};

export default MoviePage;
