import React from 'react';
import MovieList from './MovieList';
import MoviePage from './MoviePage';
import MoviesContextProvider from './Context/MoviesContextProvider';


const ComponentMovieProvider: React.FC = () => {

    return (
        <div>
            <MoviesContextProvider>
                <MoviePage />
            </MoviesContextProvider>
        </div>
    );

};

export default ComponentMovieProvider;