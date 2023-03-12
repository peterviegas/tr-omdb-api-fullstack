import React from 'react';
import MoviePage from './MoviePage';
import MoviesContextProvider from './Context/MoviesContextProvider';

const ComponentMovieProvider: React.FC = () => {
    return (
        <MoviesContextProvider>
            <MoviePage />
        </MoviesContextProvider>
    );
};

export default ComponentMovieProvider;
