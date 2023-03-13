import React, { useEffect, useState } from 'react';
import { MoviesContext } from './MoviesContext';
import { MovieType } from '../Type/MovieType.type';
import { OmdbApiFetch } from '../../Fetch/OmbdApiFetch';
import { ErrorMessagesAPI } from '../../ErrorHandler/ErrorMessages';
import { useLocation } from 'react-router-dom';
//import { baseUrl } from '../../Config/baseURL';

interface MoviesProviderProp {
    children: React.ReactNode;
}

const MoviesContextProvider: React.FC<MoviesProviderProp> = ({ children }) => {
    const [movies, setMovies] = useState<Array<MovieType>>([]);
    const [errorMsg, setErrorMsg] = useState<string>('');
    const location = useLocation();

    const { pathname } = location;
    const searchedMovie = pathname.split('/')[2];

    const { errorFetch } = ErrorMessagesAPI;

    const fetchMovie = async () => {
        setErrorMsg('');
        const movieResponse = await OmdbApiFetch<Array<MovieType>>(
            `http://www.omdbapi.com/?s=${searchedMovie}&type=movie&apikey=3fe67f82`
        );

        if (movieResponse && typeof movieResponse !== 'string') {
            const movieArray: Array<MovieType> = movieResponse.map(
                (movie: MovieType) => {
                    const { Title, Year, imdbID, Type, Poster } = movie;
                    return {
                        Title: Title,
                        Year: Year,
                        imdbID: imdbID,
                        Type: Type,
                        Poster: Poster,
                    };
                }
            );
            setMovies(movieArray);
        } else if (!movieResponse) {
            setErrorMsg(errorFetch);
        } else {
            console.log(movieResponse);
            setErrorMsg(movieResponse);
            console.log('error');
        }
    };

    useEffect(() => {
        fetchMovie();
    }, []);

    return (
        <MoviesContext.Provider value={{ movies: movies, errorMsg: errorMsg }}>
            {children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;
