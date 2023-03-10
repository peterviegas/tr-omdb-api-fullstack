import React, { useContext, useEffect, useState } from 'react';
import { OmdbApiFetch } from '../Fetch/OmbdApiFetch';
import {
    MovieResponseType,
    MovieCardType,
    defaultMovieCard,
} from './MovieType.type';
import ErrorComponent from '../ErrorHandler/ErrorComponent';
import { ErrorMessagesAPI } from '../ErrorHandler/ErrorMessages';
import { MoviesContext } from './Context/MoviesContext';

const { errorFetch } = ErrorMessagesAPI;

//id is imbdId from Ombd json
const id = 'tt0107362';
const url: string = `http://www.omdbapi.com/?i=${id}&type=movie&apikey=3fe67f82`;

const MovieCard: React.FC = () => {
    const [selectedMovie, setSelectedMovie] =
        useState<MovieCardType>(defaultMovieCard);
    const [errorMsg, setErrorMsg] = useState<string>('');

    const { movies } = useContext(MoviesContext);

    const fetchMovie = async () => {
        setErrorMsg('');
        const movieResponse = await OmdbApiFetch<MovieResponseType>(url);

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
        <div className='movieCard'>
            <div className='moverCard__row'>
                <div className='movieCard__imgBox'>
                    <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
                </div>
                <div className='movieCard__detailBox'>
                    <h6 className='movieCard__heading'>
                        {selectedMovie.Title}
                    </h6>
                    <div className='movieCard__details'>
                        <span className='movieCard__detail'>
                            {selectedMovie.Genre}
                        </span>
                        <span className='movieCard__detail'>
                            {selectedMovie.Year}
                        </span>
                        <span className='movieCard__detail'>
                            {selectedMovie.Rated}
                        </span>
                        <span className='movieCard__detail'>
                            {selectedMovie.Language}
                        </span>
                    </div>
                    <button className='btn__movieCard'>+ Wishlist</button>
                    <p className='movieCard__description'>
                        {selectedMovie.Plot}
                    </p>
                </div>
            </div>
            <div className='movieCard__row'>
                <h3>Cast and Crew :</h3>
                <p>Director: {selectedMovie.Director}</p>
                <p>Writor: {selectedMovie.Writer}</p>
                <p>Actors: {selectedMovie.Actors}</p>
            </div>
        </div>
    );
};

export default MovieCard;
