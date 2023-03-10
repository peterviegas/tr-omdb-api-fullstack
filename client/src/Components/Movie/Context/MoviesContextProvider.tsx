

import React,{useState} from "react";
import { MoviesContext} from "./MoviesContext";
import { MovieType } from "../MovieType.type";



interface MoviesProviderProp {
    children: React.ReactNode;
}

const MoviesContextProvider:React.FC<MoviesProviderProp> = ({children}) => {

    const [movies, setMovies] = useState<Array<MovieType>>([]);

    const sharedMovies= {
        movies: movies,
        setMovies:setMovies
    }

 
    return <MoviesContext.Provider value={sharedMovies}>
        {children}
    </MoviesContext.Provider> 
}

export default MoviesContextProvider;