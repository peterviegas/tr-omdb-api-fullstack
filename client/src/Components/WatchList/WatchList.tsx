import React, { useEffect, useState } from 'react';
import RenderWatchList from './RenderWatchList';
import { OmdbApiFetch } from '../Fetch/OmbdApiFetch';
import { MovieType } from '../Movie/Type/MovieType.type';
import { ErrorMessagesAPI } from '../ErrorHandler/ErrorMessages';
import { baseUrl } from '../Config/baseURL';
import ErrorComponent from '../ErrorHandler/ErrorComponent';

const { errorFetch } = ErrorMessagesAPI;

const WatchList: React.FC = () => {
    const [watchlist, setWatchlist] = useState<Array<MovieType>>([]);
    const [error, setError] = useState<string>('');

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

    return (
        <>
            <div className='heading__img'>
                <h3 className='heading__3'> Movies in your watchlist :</h3>
            </div>

            <div className='watchlist'>
                <RenderWatchList movies={watchlist} />
                {error && <ErrorComponent>{error}</ErrorComponent>}
            </div>
        </>
    );
};

export default WatchList;
