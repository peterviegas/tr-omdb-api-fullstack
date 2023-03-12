import React from 'react';
import MovieList from './MovieList';
import MoviesContextProvider from './Context/MoviesContextProvider';

const ComponentMovieListProvider: React.FC = () => {
    return (
        <MoviesContextProvider>
            <MovieList />
        </MoviesContextProvider>
    );
};

export default ComponentMovieListProvider;
