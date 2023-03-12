import { Request, Response } from 'express';
import { getMoviesFromApi } from '../../services/movies_service';
import { isApiKeyPresent } from '../../util/environment';
import { isString } from '../../util/typeHandlers';
import { convertUrlToArray } from '../../util/urlHandler';

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
