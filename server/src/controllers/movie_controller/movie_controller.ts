import { Request, Response } from 'express';
import { getMovieFromApi } from '../../services/movie_service';
import { isApiKeyPresent } from '../../util/environment';
import { isString } from '../../util/typeHandlers';
import { convertUrlToArray } from '../../util/urlHandler';

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
