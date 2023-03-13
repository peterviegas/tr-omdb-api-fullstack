export type MovieShortType = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
};

export type MovieLongType = MovieShortType & {
    Actors: string;
    Awards: string;
    Country: string;
    Director: string;
    Genre: string;
    Language: string;
    Plot: string;
    Rated: number;
    Released: string;
    Runtime: string;
    Writer: string;
    imdbRating: number;
    imdbVotes: string;
};

export type APIError = { Response: string; Error: string };
