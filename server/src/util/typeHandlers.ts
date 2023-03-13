import { APIError, MovieShortType } from '../models/MovieType.type';

export const isApiError = (data: { Response: string }): data is APIError =>
    data.Response === 'False';

export const isString = (string: any): string is string =>
    typeof string === 'string';
