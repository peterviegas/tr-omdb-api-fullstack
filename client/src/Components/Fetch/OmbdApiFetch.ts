

import { ErrorMessagesAPI } from '../ErrorHandler/ErrorMessages'
const { error404, error500, errorFetch } = ErrorMessagesAPI

export const OmbdApiFetch = async <T>(url: string): Promise<T | string | undefined> => {
    try {
        const response: Response = await fetch(url)

        console.log(response);
        if (!response.ok) {
            if (response.status === 404) throw new Error(error404)
            else if (response.status === 500) throw new Error(error500)
            else {
                throw new Error(errorFetch)
            }
        }

        const data = await response.json()

        if (data.Search) {
            const { Search } = data;
            return Search;
        }

        return data;


    } catch (err: unknown) {
        let message: string = "unknown error";
        if (err instanceof Error) message = err.message;
        return message;
    }

}
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