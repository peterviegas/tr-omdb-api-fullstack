import { setupServer } from 'msw/node';
import { rest } from 'msw';

const genre = 'action';
const server = setupServer(
    rest.get(
        `http://www.omdbapi.com/?s=${genre}&type=movie&apikey=3fe67f82`,
        async (req, res, ctx) => {
            return res(
                ctx.json({
                    Title: 'Last Action Hero',
                    Year: '1993',
                    imdbID: 'tt0107362',
                    Type: 'movie',
                    Poster: 'https://m.media-amazon.com/images/M/MV5BNjdhOGY1OTktYWJkZC00OGY5LWJhY2QtZmQzZDA2MzY5MmNmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
                })
            );
        }
    )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('handles server error 500', async () => {
    server.use(
        rest.get( `http://www.omdbapi.com/?s=${genre}&type=movie&apikey=3fe67f82`, (req, res, ctx) => {
            return res(ctx.status(500));
        })
    );
});

test('handles server error 404', async () => {
    server.use(
        rest.get( `http://www.omdbapi.com/?s=${genre}&type=movie&apikey=3fe67f82`, (req, res, ctx) => {
            return res(ctx.status(404));
        })
    );
});