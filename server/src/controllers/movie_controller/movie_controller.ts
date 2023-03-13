import { Request, Response } from 'express';
import { getMovieFromApi } from '../../services/movie_service';
import { isApiKeyPresent } from '../../util/environment';
import { isString } from '../../util/typeHandlers';

export const getMovie = async (req: Request, res: Response) => {
    if (!isApiKeyPresent()) {
        const error = 'API Key not found';
        console.log(error);
        res.status(500).send(error);
        return;
    }
    const data = await getMovieFromApi(req.params.id);
    if (isString(data) || data === undefined) {
        res.status(500).send(data);
        return;
    }
    res.status(200).json(data);
};
