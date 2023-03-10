
import React, { useEffect, useState } from "react";
import { OmbdApiFetch } from "../Fetch/OmbdApiFetch";
import { MovieType } from "./MovieType.type";
import ErrorComponent from "../ErrorHandler/ErrorComponent";
import { ErrorMessagesAPI } from "../ErrorHandler/ErrorMessages";

const { errorFetch } = ErrorMessagesAPI;

const MovieList: React.FC = () => {

    const [movies, setMovies] = useState<Array<MovieType>>([]);
    const [errorMsg, setErrorMsg] = useState<string>("");

    const fetchMovie = async () => {
        setErrorMsg("");
    const movieResponse= await OmbdApiFetch("action");
    console.log(movieResponse)
  
        if (movieResponse && typeof movieResponse !== "string") {
            const movieArray: Array<MovieType> = movieResponse.map((movie :MovieType) => {
            const { Title, Year, imdbID, Type,Poster} = movie;
            return { Title: Title,Year: Year,imdbID:imdbID,Type:Type, Poster:Poster};      
        });
    setMovies(movieArray);
        } else if(!movieResponse){
           setErrorMsg(errorFetch); 
        }  
        else {
            console.log(movieResponse);
            setErrorMsg(movieResponse);
        console.log("error");
    }   
}

useEffect(()=>{
    fetchMovie();
},[])


    return (
        <div>
         <ul className="movieList">
        {
            movies.map(movie => {
                const { Title, Year, imdbID, Poster} = movie;
                return (
                    <li key={imdbID} className="movieList__item">
                        <div className="movieList__img-container">
                           <img className="movieList__img" src={Poster} alt={ Title} /> 
                        </div>
                        
                        <h6 className="movieList__heading">{`${Title}, ${Year} `}</h6>
                    </li>
                )
            })
        }
       
            </ul>
            {
                errorMsg && <ErrorComponent>{errorMsg}</ErrorComponent>
            }
         </div>)
   
}

export default MovieList;

