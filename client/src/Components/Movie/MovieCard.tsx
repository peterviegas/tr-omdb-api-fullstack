
import React, { useContext, useEffect, useState } from "react";
import { OmbdApiFetch } from "../Fetch/OmbdApiFetch";
import { MovieResponseType,MovieCardType,defaultMovieCard } from "./MovieType.type";
import ErrorComponent from "../ErrorHandler/ErrorComponent";
import { ErrorMessagesAPI } from "../ErrorHandler/ErrorMessages";
import { MoviesContext} from "./Context/MoviesContext";

const { errorFetch } = ErrorMessagesAPI;

const id = 'tt0107362';
const url: string = `http://www.omdbapi.com/?i=${id}&type=movie&apikey=3fe67f82`

const MovieCard: React.FC = () => {

    const [selectedMovie, setSelectedMovie] = useState<MovieCardType>(defaultMovieCard)
    const [errorMsg, setErrorMsg] = useState<string>("");
    const {movies} = useContext(MoviesContext);

    const fetchMovie = async () => {
        setErrorMsg("");
    const movieResponse= await OmbdApiFetch<MovieResponseType>(url);
        
        
        if (movieResponse && typeof movieResponse !== "string") {
            const { Actors, Awards, Country, Director, Genre, Language, Plot, Poster, Rated, Released, Runtime, Title, Type, Writer, Year, imdbID, imdbRating, imdbVotes } = movieResponse
            
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
            }
        setSelectedMovie(mov);  
        }
        else if (!movieResponse) {
           setErrorMsg(errorFetch); 
        }  
        else {
            setErrorMsg(movieResponse);
    }   
}

useEffect(()=>{
    fetchMovie();
},[])
    return <div></div>
}

export default MovieCard