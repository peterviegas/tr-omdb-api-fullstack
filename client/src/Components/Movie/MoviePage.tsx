import React, { useContext, useEffect, useState } from 'react';
import { MovieType } from './Type/MovieType.type';
import { MoviesContextType, MoviesContext } from './Context/MoviesContext';
import RenderMoviesList from './RenderMoviesList';
import MovieCard from './MovieCard';
import { useLocation } from 'react-router-dom';
import MUIPagination from '../Pagination/MUIPagination';
import { PostToDb } from '../Post/PostToDb';
import { OmdbApiFetch } from '../Fetch/OmbdApiFetch';
import { DeleteFromDb } from '../Delete/DeleteFromDb';
import { baseUrl } from '../Config/baseURL';
import ErrorComponent from '../ErrorHandler/ErrorComponent';

const MoviePage: React.FC = () => {
    const { movies, errorMsg, count, page, onChange } =
        useContext<MoviesContextType>(MoviesContext);

    const [addToWatchList, setAddToWatchList] = useState<boolean>(false);

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

    //check if movie already added
    const checkIfMovieIDAddedToDb = async () => {
        const response = await OmdbApiFetch<Array<string>>(
            `${baseUrl}/wishlist`
        );
        if (response && typeof response !== 'string') {
            const isInwatchList = response.some((resId) => resId === imdbID);
            isInwatchList ? setAddToWatchList(true) : setAddToWatchList(false);
        } else return setAddToWatchList(false);
    };

    //POST to database
    const onClickMovieCardButtonHandler = async () => {
        if (addToWatchList === false) {
            const response = await PostToDb(`${baseUrl}/wishlist`, imdbID);

            if (response.created) {
                setAddToWatchList(true);
            } else {
                setAddToWatchList(false);
            }
        } else {
            const response = await DeleteFromDb(`${baseUrl}/wishlist`, imdbID);

            if (response.deleted) {
                setAddToWatchList(false);
            } else {
                setAddToWatchList(true);
            }
        }
    };

    //Delete from database

    const onClickHandler = (e: React.MouseEvent) => {
        e.preventDefault();
        setAddToWatchList(false);
        const { pathname } = location;
        unselectedMovies(pathname.split('/')[2]);
    };

    useEffect(() => {
        checkIfMovieIDAddedToDb();
    }, [onClickHandler]);

    return (
        <div className='moviePage'>
            <MovieCard
                onClick={onClickMovieCardButtonHandler}
                addToWatchList={addToWatchList}
            />
            <h3 className='heading__3'>{'Similar movies you may like'}</h3>
            <div className='pagination__down-arrow'></div>
            <MUIPagination count={count} page={page} onChange={onChange} />
            <div className='moviePage__list'>
                <RenderMoviesList
                    movies={unselectedMovies(imdbID)}
                    searchedMovieName={searchedMovieName}
                    onClick={onClickHandler}
                />
                {errorMsg && <ErrorComponent>{errorMsg}</ErrorComponent>}
            </div>
            <MUIPagination count={count} page={page} onChange={onChange} />
        </div>
    );
};

export default MoviePage;
