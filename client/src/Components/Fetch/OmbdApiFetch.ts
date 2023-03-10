
import { MovieType } from '../Movie/MovieType.type'
import { ErrorMessagesAPI } from '../ErrorHandler/ErrorMessages'
const { error404, error500, errorFetch } = ErrorMessagesAPI

//Fetch json from Ombd
export const OmbdApiFetch = async (genre: string): Promise<Array<MovieType> | string | undefined> => {
    try {
        const response: Response = await fetch(
            `http://www.omdbapi.com/?s=${genre}&type=movie&apikey=3fe67f82`
        )
        console.log(response);
        if (!response.ok) {
            if (response.status === 404) throw new Error(error404)
            else if (response.status === 500) throw new Error(error500)
            else {
                throw new Error(errorFetch)
            }
        }


        const data = await response.json()

        const { Search } = data;

        return Search;

    } catch (err: unknown) {
        let message: string = "unknown error";
        if (err instanceof Error) message = err.message;
        return message;
    }

}
