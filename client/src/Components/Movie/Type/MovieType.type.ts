export type MovieResponseType = {
    Title: string;
    Year: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Poster: string;
    Ratings: string;
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: boolean;
}



export type MovieCardType = {
    Actors: string;
    Awards: string;
    Country: string;
    Director: string;
    Genre: string;
    Language: string;
    Plot: string;
    Poster: string;
    Rated: string;
    Released: string;
    Runtime: string;
    Title: string;
    Type: string;
    Writer: string;
    Year: string;
    imdbID: string;
    imdbRating: string;
    imdbVotes: string;
}

export const defaultMovieCard = {
    Actors: "",
    Awards: "",
    Country: "",
    Director: "",
    Genre: "",
    Language: "",
    Plot: "",
    Poster: "",
    Rated: "",
    Released: "",
    Runtime: "",
    Title: "",
    Type: "",
    Writer: "",
    Year: "",
    imdbID: "",
    imdbRating: "",
    imdbVotes: "",

}

export type MovieType = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}



