import { Request, Response } from 'express';
import { MovieCardType, MovieType } from '../models/MovieType.type';

export const getMovies = async (req: Request, res: Response) => {
    try {
        const response = await fetch(
            `http://www.omdbapi.com/?s=${req.query.title}&type=movie&apikey=${process.env.API_KEY}`
        );
        if (!response.ok) {
            throw response.status;
        }

        const data: { Search: MovieType[] } = await response.json();

        res.json(data.Search).status(200);
    } catch (err: unknown) {
        res.status(err as number);
    }
};

export const getMovie = async (req: Request, res: Response) => {
    try {
        const response = await fetch(
            `http://www.omdbapi.com/?i=${req.query.id}&type=movie&apikey=${process.env.API_KEY}`
        );
        if (!response.ok) {
            throw response.status;
        }

        const data: MovieCardType[] = await response.json();

        res.json(data).status(200);
    } catch (err: unknown) {
        res.status(err as number);
    }
};
