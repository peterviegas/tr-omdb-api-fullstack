import { Request, Response } from 'express';
import { MovieType } from '../models/MovieType.type';

export const getMovie = async (req: Request, res: Response) => {
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
