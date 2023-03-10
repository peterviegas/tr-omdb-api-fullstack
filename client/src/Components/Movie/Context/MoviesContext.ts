
import { createContext } from "react";
import { MovieType } from "../MovieType.type";

interface MoviesContextType {
    movies: Array<MovieType>;
    setMovies: (movies: Array<MovieType>) => void
}

export const MoviesContext = createContext<MoviesContextType>({
    movies: [],
    setMovies: () => { }
});


