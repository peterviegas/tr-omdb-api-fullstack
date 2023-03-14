import { APIError, MovieLongType } from '../models/MovieType.type';
import { API_KEY } from '../util/environment';

export const getMovieFromApi = async (id: string) => {
    try {
        const response = await fetch(
            `http://www.omdbapi.com/?i=${id}&type=movie&apikey=${API_KEY}`
        );
        if (!response.ok) {
            if (response.status === 400) {
                const error: APIError = await response.json();
                return error;
            }
            throw response.statusText;
        }
        const data: MovieLongType[] = await response.json();
        return data;
    } catch (err: any) {
        return err;
    }
};
