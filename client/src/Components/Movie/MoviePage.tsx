import React, { useContext, useState } from 'react';
import { MovieType } from './Type/MovieType.type';
import { MoviesContext } from './Context/MoviesContext';
import { RenderMoviesList } from './RenderMoviesList';
import MovieCard from './MovieCard';
const MoviePage: React.FC = () => {
    const [id, setId] = useState<string>('');
    const { movies } = useContext(MoviesContext);

    const unselectedMovies = (id: string): Array<MovieType> => {
        const movieList: Array<MovieType> = movies.filter(
            (movie: MovieType) => movie.imdbID !== id
        );
        return movieList;
    };

    return (
        <div className='moviePage'>
            <MovieCard setId={(id) => setId(id)} />
            <h3 className='moviePage__heading-3'>
                Other movies of your search list :
            </h3>
            <div className='moviePage__list'>
                {RenderMoviesList(unselectedMovies(id), id)}
            </div>
        </div>
    );
};

export default MoviePage;
