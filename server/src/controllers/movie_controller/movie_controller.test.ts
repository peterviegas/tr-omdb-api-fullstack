import request from 'supertest';
import { app } from '../../app';
import * as environment from '../../util/environment';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const fakeData = {
    Title: 'The Godfather',
    Year: '1972',
    Rated: 'R',
    Released: '24 Mar 1972',
    Runtime: '175 min',
    Genre: 'Crime, Drama',
    Director: 'Francis Ford Coppola',
    Writer: 'Mario Puzo, Francis Ford Coppola',
    Actors: 'Marlon Brando, Al Pacino, James Caan',
    Plot: 'The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.',
    Language: 'English, Italian, Latin',
    Country: 'United States',
    Awards: 'Won 3 Oscars. 32 wins & 31 nominations total',
    Poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
    Ratings: [
        { Source: 'Internet Movie Database', Value: '9.2/10' },
        { Source: 'Rotten Tomatoes', Value: '97%' },
        { Source: 'Metacritic', Value: '100/100' },
    ],
    Metascore: '100',
    imdbRating: '9.2',
    imdbVotes: '1,880,874',
    imdbID: 'tt0068646',
    Type: 'movie',
    DVD: '11 May 2004',
    BoxOffice: '$136,381,073',
    Production: 'N/A',
    Website: 'N/A',
    Response: 'True',
};

const error = { Response: 'False', Error: 'Too many results' };

describe('GET /api/v1/movie endpoint', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });
    it('Should fail because API_KEY is not set', async () => {
        jest.spyOn(environment, 'isApiKeyPresent').mockReturnValue(false);
        const res = await request(app).get('/api/v1/movie/tt0068346');
        expect(res.text).toBe('API Key not found');
        expect(res.statusCode).toEqual(500);
    });
});

const server = setupServer();

describe('GET /api/v1/movie API mocks', () => {
    beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());
    it('Should get data back from the api', async () => {
        server.use(
            rest.get(`http://www.omdbapi.com/`, (req, res, ctx) => {
                return res(ctx.status(200), ctx.json(fakeData));
            })
        );
        const res = await request(app).get('/api/v1/movie/fake');
        expect(res.body).toStrictEqual(fakeData);
        expect(res.statusCode).toBe(200);
    });
    it('Should return a 500 from the server', async () => {
        server.use(
            rest.get(`http://www.omdbapi.com/`, (req, res, ctx) => {
                return res(ctx.status(500));
            })
        );
        const res = await request(app).get('/api/v1/movie/tt0068346');
        expect(res.statusCode).toBe(500);
    });
    it('Should return a error from the server', async () => {
        server.use(
            rest.get(`http://www.omdbapi.com/`, (req, res, ctx) => {
                return res(ctx.status(400), ctx.json(error));
            })
        );
        const res = await request(app).get('/api/v1/movie/tt0068346');
        expect(res.body).toStrictEqual(error);
        expect(res.statusCode).toBe(400);
    });
});
