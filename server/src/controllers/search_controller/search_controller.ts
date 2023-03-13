import { Request, Response } from 'express';
import { getMoviesFromApi } from '../../services/movies_service';
import { isApiKeyPresent } from '../../util/environment';
import { isString } from '../../util/typeHandlers';

export const getSearch = async (req: Request, res: Response) => {
    if (!isApiKeyPresent()) {
        const error = 'API Key not found';
        console.log(error);
        res.status(500).send(error);
        return;
    }
    const data = await getMoviesFromApi(req.params.title);
    if (isString(data) || data === undefined) {
        res.status(500).send(data);
        return;
    }
    res.status(200).json(data);
};
