import React, { useEffect, useState } from 'react';
import RenderMoviesList from '../Movie/RenderMoviesList';
import { OmdbApiFetch } from '../Fetch/OmbdApiFetch';
import { MovieType } from '../Movie/Type/MovieType.type';
import { ErrorMessagesAPI } from '../ErrorHandler/ErrorMessages';
import { baseUrl } from '../Config/baseURL';
import { useLocation, useNavigate, useRevalidator } from 'react-router-dom';

const { errorFetch } = ErrorMessagesAPI;

const WatchList: React.FC = () => {
    const [watchlist, setWatchlist] = useState<Array<MovieType>>([]);

    const [error, setError] = useState<string>('');

    const [searchedMovieName, setSearchedMovieName] = useState('');

    const fetchWatchListMovies = async () => {
        const response = await OmdbApiFetch<Array<string>>(
            `${baseUrl}/wishlist`
        );

        if (response && typeof response !== 'string') {
            const moviePromises = response.map(
                async (id) => await fetchMovieById(id)
            );
            const movies = await Promise.all(moviePromises);
            setWatchlist(
                movies.filter((mov) => mov !== undefined) as Array<MovieType>
            );
        } else if (!response && typeof response === 'string') {
            setError(response);
        } else {
            setError(errorFetch);
        }
    };

    const fetchMovieById = async (id: string) => {
        const response = await OmdbApiFetch<MovieType>(
            `${baseUrl}/movie/${id}`
        );

        if (response && typeof response !== 'string') {
            return response;
        } else if (!response && typeof response === 'string') {
            setError(response);
        } else {
            setError(errorFetch);
        }
    };

    useEffect(() => {
        fetchWatchListMovies();
    }, []);

    const onClickHandler = (e: React.SyntheticEvent) => {
        const target = e.target;
        if (target instanceof HTMLImageElement) {
            const alt = target.alt;
            setSearchedMovieName(alt);
        }
    };

    return (
        <div className='watchlist'>
            <RenderMoviesList
                movies={watchlist}
                searchedMovieName={searchedMovieName}
                onClick={onClickHandler}
            />
        </div>
    );
};

export default WatchList;
