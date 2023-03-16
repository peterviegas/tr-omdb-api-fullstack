//import { render, unmountComponentAtNode } from "react-dom";
import React from 'react'
import { MemoryRouter } from "react-router-dom";
import App from './../../App';
import { RenderMoviesList } from './RenderMoviesList';
import {setupServer} from 'msw/node';
import {rest} from 'msw';
import { render, screen } from '@testing-library/react'
import { MovieType } from './Type/MovieType.type';
import { Response } from 'express';
const { movies } = require ('./RenderMoviesList');




 const movieArr = [
     {
         Title: 'Last Action Hero',
         Year: '1993',
         imdbID: 'tt0107362',
         Type: 'movie',
         Poster: 'https://m.media-amazon.com/images/M/MV5BNjdhOGY1OT…zY5MmNmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
     },
     {
         Title: 'Looney Tunes: Back in Action',
         Year: '2003',
         imdbID: 'tt0318155',
         Type: 'movie',
         Poster: 'https://m.media-amazon.com/images/M/MV5BMzRiOWNkOW…zhlNTk2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
     },
     {
         Title: 'A Civil Action',
         Year: '1998',
         imdbID: 'tt0120633',
         Type: 'movie',
         Poster: 'https://m.media-amazon.com/images/M/MV5BZmEzNjhiZW…GFkMzI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
     },
     {
         Title: 'An Action Hero',
         Year: '2022',
         imdbID: 'tt15600222',
         Type: 'movie',
         Poster: 'https://m.media-amazon.com/images/M/MV5BMDJiOTdmMG…WMzZTg0XkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_SX300.jpg',
     },
     {
         Title: 'Missing in Action',
         Year: '1984',
         imdbID: 'tt0087727',
         Type: 'movie',
         Poster: 'https://m.media-amazon.com/images/M/MV5BNDczNDljZT…mFjMDQyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
     },
     {
         Title: 'Action Point',
         Year: '2018',
         imdbID: 'tt6495770',
         Type: 'movie',
         Poster: 'https://m.media-amazon.com/images/M/MV5BMjEyMTU5MTk1N15BMl5BanBnXkFtZTgwMzIzMzczNTM@._V1_SX300.jpg',
     },
     {
         Title: 'Action Jackson',
         Year: '1988',
         imdbID: 'tt0094612',
         Type: 'movie',
         Poster: 'https://m.media-amazon.com/images/M/MV5BYjc0Y2E2Zj…zFmMjI4XkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg',
     },
     {
         Title: '321 Action',
         Year: '2020',
         imdbID: 'tt13423846',
         Type: 'movie',
         Poster: 'https://m.media-amazon.com/images/M/MV5BYTRmYzgyZj…DExNWE5XkEyXkFqcGdeQXVyNjI2ODk3NTM@._V1_SX300.jpg',
     },
     {
         Title: 'Missing in Action 2: The Beginning',
         Year: '1985',
         imdbID: 'tt0089604',
         Type: 'movie',
         Poster: 'https://m.media-amazon.com/images/M/MV5BOTFhNTdiND…jBjNTBhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
     },
     {
         Title: 'Class Action',
         Year: '1991',
         imdbID: 'tt0101590',
         Type: 'movie',
         Poster: 'https://m.media-amazon.com/images/M/MV5BNWY5Mjk4Zm…zA3MDIzXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg',
     },
 ];

 const genre = 'action';

 const server = setupServer(
    // capture "GET /greeting" requests
    rest.get(`http://www.omdbapi.com/?s=${genre}&type=movie&apikey=3fe67f82`, async (req, res, ctx) => {
      // respond using a mocked JSON body
      return res(ctx.json({ Title: "Last Action Hero", 
      Year: "1993", 
      imdbID: "tt0107362", 
      Type: "movie", 
      Poster: "https://m.media-amazon.com/images/M/MV5BNjdhOGY1OTktYWJkZC00OGY5LWJhY2QtZmQzZDA2MzY5MmNmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"}
      ))
    }),
  )
  
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())



 test('renders class App', () => {
    render(<App />)
    screen.queryByRole('class',{description: `App`})
})



/*
test('handles 418 error', async () => {
    server.use(
      rest.get('https://swapi.dev/api/people/1', (req, res, ctx) => {
        return res(ctx.status(418))
      }),
    )
    render(<App />);
    screen.queryByRole('alertdialog',{description: `418 I'm a tea pot 🫖, silly`})
  });*/
/*
  interface RenderMoviesListProps{
	movies: Array<MovieType>,
	searchedMovieName: string,
	onClick: (e: React.MouseEvent) => void
}

const onChangeReason = jest.fn(() => "test");
const mockReasonSparing: RenderMoviesListProps = {
    movies: movieArr,
    searchedMovieName: 'type',
    onClick:onChangeReason
}


const {renderMov } = require ('RenderMoviesList');

renderMov.*/

/*describe("RenderMoviesList", () => {
	test("Should match a snapshot", () => {

		const root = document.createElement('div');
  		document.body.appendChild(root);

		render (
			<MemoryRouter initialEntries={['/']}>
				<RenderMoviesList:(...mockReasonSparing)  />
			</MemoryRouter>,
			root
		)
	})
});*/

/*
test("Should match a snapshot", async () => {
	const { result, waitFor } = renderHook(RenderMoviesList, {
		wrapper: RenderMoviesList()
	})

	// wait for the appointmenents to populate
	await waitFor(() => result.current)
})
*/