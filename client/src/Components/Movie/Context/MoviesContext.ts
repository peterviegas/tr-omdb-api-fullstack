
import { createContext } from "react";
import { MovieType } from "../Type/MovieType.type";

export interface MoviesContextType {
    movies: Array<MovieType>;
    errorMsg: string;
}

export const MoviesContext = createContext<MoviesContextType>({
    movies: [],
    errorMsg: ""
});



