import { rest } from "msw";
import { setupServer } from "msw/node";
import { ErrorMessagesAPI } from "../ErrorHandler/ErrorMessages";
import { OmdbApiFetch } from "./OmbdApiFetch";

const genre = 'action';

const handlers = [
  rest.get(`http://www.omdbapi.com/?s=${genre}&type=movie&apikey=3fe67f82`, (req, res, ctx) => {
    return res(
		ctx.json({
			Title: 'Last Action Hero',
			Year: '1993',
			imdbID: 'tt0107362',
			Type: 'movie',
			Poster: 'https://m.media-amazon.com/images/M/MV5BNjdhOGY1OTktYWJkZC00OGY5LWJhY2QtZmQzZDA2MzY5MmNmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
		})
	);
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const mock = jest.fn();

it(`returns data from API`, async () => {
  const response = await OmdbApiFetch(`http://www.omdbapi.com/?s=${genre}&type=movie&apikey=3fe67f82`);

  expect(response).toEqual({
    misdemeanours: [
      { citizenId: 16499, misdemeanour: "lift", date: "2/17/2023" },

      { citizenId: 476, misdemeanour: "lift", date: "2/17/2023" },
    ],
  });
});
/*
it(`calls the error callback function on error`, async () => {
  server.use(
    rest.get("https://testingAPI.com/res", (req, res, ctx) => {
      return res(ctx.status(404));
    })
  );

  const response = await OmdbApiFetch("https://testingAPI.com/res");

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toBeCalledWith(ErrorMessagesAPI.error404);
});*/