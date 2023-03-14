import React, { useEffect, useState } from 'react';
import { MoviesContext } from './MoviesContext';
import { MovieType, SearchResponseType } from '../Type/MovieType.type';
import { OmdbApiFetch } from '../../Fetch/OmbdApiFetch';
import { ErrorMessagesAPI } from '../../ErrorHandler/ErrorMessages';
import { useLocation } from 'react-router-dom';
import { baseUrl, numOfMoviesPerPage } from '../../Config/baseURL';

const convertToNumber = (str: string) => {
    return parseInt(str);
};

interface MoviesProviderProp {
    children: React.ReactNode;
}

const MoviesContextProvider: React.FC<MoviesProviderProp> = ({ children }) => {
    const [movies, setMovies] = useState<Array<MovieType>>([]);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [errorMsg, setErrorMsg] = useState<string>('');
    const location = useLocation();

    const { pathname } = location;
    const searchedMovie = pathname.split('/')[2];

    const { errorFetch } = ErrorMessagesAPI;

    const fetchMovie = async () => {
        setErrorMsg('');
        const movieResponse = await OmdbApiFetch<SearchResponseType>(
            `${baseUrl}/search/${searchedMovie}/${currentPage}`
        );

        if (movieResponse && typeof movieResponse !== 'string') {
            const { Search, totalResults } = movieResponse;

            const movieArray: Array<MovieType> = Search.map(
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

            if (movieArray.length > 0) {
                setTotalPages(
                    Math.ceil(
                        convertToNumber(totalResults) / numOfMoviesPerPage
                    )
                );
            }
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
    }, [currentPage]);

    const onChangeHandler = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setCurrentPage(value);
    };

    return (
        <MoviesContext.Provider
            value={{
                movies: movies,
                errorMsg: errorMsg,
                count: totalPages,
                page: currentPage,
                onChange: onChangeHandler,
            }}
        >
            {children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;
