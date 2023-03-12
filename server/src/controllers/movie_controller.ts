import { Request, Response } from 'express';
import { getMovieFromApi, getMoviesFromApi } from '../services/movie_service';
import { isApiKeyPresent } from '../util/environment';
import { isString } from '../util/typeHandlers';
import { convertUrlToArray } from '../util/urlHandler';

export const getHealth = async (req: Request, res: Response) => {
    res.status(200).send('Welcome to the Movie API!');
};

export const getMovies = async (req: Request, res: Response) => {
    if (isApiKeyPresent()) false;
    const [title] = convertUrlToArray(req.url);
    if (!title) {
        res.status(400).send('Title not found');
        return false;
    }
    const data = await getMoviesFromApi(title);
    if (isString(data)) {
        res.status(500).send(data);
        return;
    }
    res.status(200).json(data);
};

export const getMovie = async (req: Request, res: Response) => {
    if (!isApiKeyPresent()) {
        const error = 'API Key not found';
        console.log(error);
        res.status(500).send(error);
        return;
    }
    const [id] = convertUrlToArray(req.url);
    if (!id) {
        res.status(400).send('ID not found');
        return;
    }
    const data = await getMovieFromApi(id);
    if (isString(data)) {
        res.status(500).send(data);
        return;
    }
    res.status(200).json(data);
};
