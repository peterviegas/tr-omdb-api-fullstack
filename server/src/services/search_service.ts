import { APIError, MovieShortType } from '../models/MovieType.type';
import { API_KEY } from '../util/environment';

interface ISearch {
    Search: MovieShortType[];
    totalResults: string;
    Response: string;
}

export const getSearchFromApi = async (title: string, page: number) => {
    try {
        const response = await fetch(
            `http://www.omdbapi.com/?s=${title}&page=${page}&type=movie&apikey=${API_KEY}`
        );
        if (!response.ok) {
            if (response.status === 400) {
                const error: APIError = await response.json();
                return error;
            }
            throw response.statusText;
        }
        const data: ISearch = await response.json();
        return data;
    } catch (err: any) {
        return err;
    }
};
