import {render} from '@testing-library/react'
import { MoviesContext } from './MoviesContext';
import Loading from './../../Loading/Loading';

interface MoviesProviderProp {
    children: React.ReactNode;
}

const mock: MoviesProviderProp = {
	children: 'Test Loading',
}

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
];


const errorMsg ='error';
const totalPages = 10;
const currentPage = 1;
const onChangeHandler = jest.fn(() => "test");
const isLoading = true;

test(`When the MoviesContextProvider component is rendered, will get the load value for the page`, async () => {
	const {container } = render(
			<MoviesContext.Provider
            value={{
                movies: movieArr,
                errorMsg: errorMsg,
                count: totalPages,
                page: currentPage,
                onChange: onChangeHandler,
            }}
			{...isLoading ? <Loading /> : ''}
            {...mock}
        >
        </MoviesContext.Provider>
	);
	const testHome = container.querySelectorAll('.loading');
	expect(testHome.length).toBe(0);
});