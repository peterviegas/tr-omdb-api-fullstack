import { Request, Response } from 'express';
import { getSearchFromApi } from '../../services/search_service';
import { isApiKeyPresent } from '../../util/environment';
import { isString } from '../../util/typeHandlers';

export const getSearch = async (req: Request, res: Response) => {
    if (!isApiKeyPresent()) {
        const error = 'API Key not found';
        console.log(error);
        res.status(500).send(error);
        return;
    }
    let page = 1;
    if (req.params.page) {
        page = parseInt(req.params.page);
    }
    if (isNaN(page)) {
        res.status(400).send('page is not a valid number');
        return;
    }
    const data = await getSearchFromApi(req.params.title, page);
    if (isString(data) || data === undefined) {
        res.status(500).send(data);
        return;
    }
    res.status(200).json(data);
};
