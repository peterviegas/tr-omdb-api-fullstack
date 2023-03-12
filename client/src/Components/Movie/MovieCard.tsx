import React, { useEffect, useState } from 'react';
import { OmdbApiFetch } from '../Fetch/OmbdApiFetch';
import {
    defaultMovieCard,
    MovieCardType,
    MovieResponseType,
} from './Type/MovieType.type';
import { baseUrl } from '../Config/baseURL';
import ErrorComponent from '../ErrorHandler/ErrorComponent';
import { ErrorMessagesAPI } from '../ErrorHandler/ErrorMessages';

const { errorFetch } = ErrorMessagesAPI;

interface MovieCardProp {
    setId: (id: string) => void;
}

//id is imbdId from Ombd json
const id = 'tt0145487';
const url: string = `http://www.omdbapi.com/?i=${id}&type=movie&apikey=3fe67f82`;
// const url: string = "/movie/id";

const MovieCard: React.FC<MovieCardProp> = ({ setId }) => {
    const [selectedMovie, setSelectedMovie] =
        useState<MovieCardType>(defaultMovieCard);
    const [errorMsg, setErrorMsg] = useState<string>('');

    const fetchMovie = async () => {
        setErrorMsg('');
        const movieResponse = await OmdbApiFetch<MovieResponseType>(url);
        setId(id);
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
                    <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
                </div>
            </div>
            {errorMsg && <ErrorComponent>{errorMsg}</ErrorComponent>}
        </div>
    );
};

export default MovieCard;
