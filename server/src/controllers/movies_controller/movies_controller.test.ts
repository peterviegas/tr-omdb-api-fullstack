import request from 'supertest';
import { app } from '../../app';
import * as environment from '../../util/environment';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const fakeData = {
    Title: 'The Godfather',
    Year: '1972',
    imdbID: 'tt0068646',
    Type: 'movie',
    Poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
};

describe('GET /api/v1/search endpoint', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
    it('Should fail because API_KEY is not set', async () => {
        jest.spyOn(environment, 'isApiKeyPresent').mockReturnValue(false);
        const res = await request(app).get('/api/v1/search/');
        expect(res.text).toBe('API Key not found');
        expect(res.statusCode).toEqual(500);
    });
    it('Should fail because no title is set', async () => {
        const res = await request(app).get('/api/v1/search/');
        expect(res.text).toBe('Title not found');
        expect(res.statusCode).toEqual(400);
    });
});

const server = setupServer();

describe('GET /api/v1/movies API mocks', () => {
    beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());
    it('Should get data back from the api', async () => {
        server.use(
            rest.get(`http://www.omdbapi.com/`, (req, res, ctx) => {
                return res(ctx.status(200), ctx.json(fakeData));
            })
        );
        const res = await request(app).get('/api/v1/search/fake');
        expect(res.body).toStrictEqual(fakeData);
        expect(res.statusCode).toBe(200);
    });
    it('Should return a 500 from the server', async () => {
        server.use(
            rest.get(`http://www.omdbapi.com/`, (req, res, ctx) => {
                return res(ctx.status(500));
            })
        );
        const res = await request(app).get('/api/v1/search/fake');
        expect(res.statusCode).toBe(500);
    });
});
