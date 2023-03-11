import React, { useContext, useState } from 'react';
import { MovieType } from './Type/MovieType.type';
import { MoviesContext } from './Context/MoviesContext';
import { RenderMoviesList } from './RenderMoviesList';
import MovieCard from './MovieCard';
const MoviePage: React.FC = () => {
    const [unselectedMovies, setUnselectedMovies] = useState<Array<MovieType>>(
        []
    );
    const { movies } = useContext(MoviesContext);

    const getUnselectedMovies = (id: string) => {
        const movieList: Array<MovieType> = movies.filter(
            (movie: MovieType) => movie.imdbID !== id
        );
        setUnselectedMovies(movieList);
    };

    return (
        <div className='moviePage'>
            <MovieCard setId={(id) => getUnselectedMovies(id)} />
            <h3 className='moviePage__heading-3'>
                Other movies of your search list :
            </h3>
            <div className='moviePage__list'>
                {RenderMoviesList(unselectedMovies)}
            </div>
        </div>
    );
};

export default MoviePage;
