import { APIError, MovieShortType } from '../models/MovieType.type';
import { API_KEY } from '../util/environment';
import { isApiError } from '../util/typeHandlers';

export const getSearchFromApi = async (title: string, page: number) => {
    try {
        const response = await fetch(
            `http://www.omdbapi.com/?s=${title}&page=${page}&type=movie&apikey=${API_KEY}`
        );
        if (!response.ok) {
            throw response.statusText;
        }
        const data: (MovieShortType[] & { Response: string }) | APIError =
            await response.json();
        if (isApiError(data)) {
            throw data.Error;
        }
        //return an out of bounds error
        return data as MovieShortType[]; //this is the wrong return type
    } catch (err: any) {
        console.log(err);
        return err as string;
    }
};
