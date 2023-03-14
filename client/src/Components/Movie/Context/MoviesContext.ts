
import { createContext } from "react";
import { MovieType } from "../Type/MovieType.type";

export interface MoviesContextType {
    movies: Array<MovieType>;
    errorMsg: string;
    count: number;
    page: number
    onChange: (event: React.ChangeEvent<unknown>, page: number) => void;
}

export const MoviesContext = createContext<MoviesContextType>({
    movies: [],
    errorMsg: "",
    count: 1,
    page: 1,
    onChange: () => { }
});



