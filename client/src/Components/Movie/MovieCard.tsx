import React, { useContext, useEffect, useState } from 'react';
import { OmdbApiFetch } from '../Fetch/OmbdApiFetch';
import {
    MovieResponseType,
    MovieCardType,
    defaultMovieCard,
    MovieType,
} from './Type/MovieType.type';
import ErrorComponent from '../ErrorHandler/ErrorComponent';
import { ErrorMessagesAPI } from '../ErrorHandler/ErrorMessages';
import { MoviesContext } from './Context/MoviesContext';
import { RenderMoviesList } from './RenderMoviesList';

const { errorFetch } = ErrorMessagesAPI;

//id is imbdId from Ombd json
const id = 'tt0145487';
const url: string = `http://www.omdbapi.com/?i=${id}&type=movie&apikey=3fe67f82`;

const MovieCard: React.FC = () => {
    const [selectedMovie, setSelectedMovie] =
        useState<MovieCardType>(defaultMovieCard);
    const [unselectedMovies, setUnselectedMovies] = useState<Array<MovieType>>(
        []
    );
    const [errorMsg, setErrorMsg] = useState<string>('');

    const { movies } = useContext(MoviesContext);

    const fetchMovie = async () => {
        setErrorMsg('');
        console.log(movies);
        const movieResponse = await OmdbApiFetch<MovieResponseType>(url);

        const movieList: Array<MovieType> = movies.filter(
            (movie: MovieType) => movie.imdbID !== id
        );

        if (movieResponse && typeof movieResponse !== 'string') {
            const {
                Actors,
                Awards,
                Country,
                Director,
                Genre,
                Language,
                Plot,
                Poster,
                Rated,
                Released,
                Runtime,
                Title,
                Type,
                Writer,
                Year,
                imdbID,
                imdbRating,
                imdbVotes,
            } = movieResponse;

            const mov = {
                Actors: Actors,
                Awards: Awards,
                Country: Country,
                Director: Director,
                Genre: Genre,
                Language: Language,
                Plot: Plot,
                Poster: Poster,
                Rated: Rated,
                Released: Released,
                Runtime: Runtime,
                Title: Title,
                Type: Type,
                Writer: Writer,
                Year: Year,
                imdbID: imdbID,
                imdbRating: imdbRating,
                imdbVotes: imdbVotes,
            };
            setSelectedMovie(mov);
            setUnselectedMovies(movieList);
        } else if (!movieResponse) {
            setErrorMsg(errorFetch);
        } else {
            setErrorMsg(movieResponse);
        }
    };

    useEffect(() => {
        fetchMovie();
    }, []);
    return (
        <div className='moviePage'>
            <div className='movieCard'>
                <div className='movieCard__summary'>
                    <div className='movieCard__detailBox'>
                        <h1 className='movieCard__heading'>
                            {selectedMovie.Title}
                        </h1>
                        <div className='movieCard__details'>
                            <span className='movieCard__detail'>
                                IMdb {selectedMovie.imdbRating}
                            </span>
                            <span className='movieCard__detail'>
                                {selectedMovie.Runtime}
                            </span>
                            <span className='movieCard__detail'>
                                {selectedMovie.Year}
                            </span>
                            <span className='movieCard__detail'>
                                {selectedMovie.Language}
                            </span>
                            <span className='movieCard__detail'>
                                {selectedMovie.Rated}
                            </span>
                        </div>
                        <p className='movieCard__description'>
                            {selectedMovie.Plot}
                        </p>
                        <p className='movieCard__genre'>
                            {selectedMovie.Genre.split(',').map((el, i) => (
                                <span key={i}>{el}</span>
                            ))}
                        </p>
                        <div className='movieCard__crew'>
                            <p>
                                <span> Director: </span>
                                {selectedMovie.Director}
                            </p>
                            <p>
                                <span> Writor:</span> {selectedMovie.Writer}
                            </p>
                            <p>
                                <span> Actors:</span> {selectedMovie.Actors}
                            </p>
                        </div>
                        <button className='btn__movieCard'>+ Wishlist</button>
                    </div>
                    <div className='movieCard__imgBox'>
                        <img
                            src={selectedMovie.Poster}
                            alt={selectedMovie.Title}
                        />
                    </div>
                </div>
            </div>
            <>
                <h3 className='moviePage__heading-3'>
                    Other movies of your search list :
                </h3>
                <div className='moviePage__list'>
                    {RenderMoviesList(unselectedMovies)}
                </div>
                {errorMsg && <ErrorComponent>{errorMsg}</ErrorComponent>}
            </>
        </div>
    );
};

export default MovieCard;
