import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MovieCard from './MovieCard';

interface MovieCardProp {
    onClick: () => void;
    addToWatchList: boolean;
}

describe('Testing for the about Component MoviePage', () => {
    test(`When the MovieCard component renders, the IMdb text should be present`, async () => {
        const onChange = jest.fn(() => "test");
	    const mock: MovieCardProp = {
            addToWatchList: true,
            onClick:onChange
        }
        render(
            <BrowserRouter>
                <MovieCard {...mock}/> 
            </BrowserRouter>
        );

        const testHome = screen.getByText(/IMdb/i);
        expect(testHome).toBeInTheDocument();
    });

    test(`When the MovieCard component renders, the Actors text should be present`, async () => {
        const onChange = jest.fn(() => "test");
	    const mock: MovieCardProp = {
            addToWatchList: true,
            onClick:onChange
        }
        render(
            <BrowserRouter>
                <MovieCard {...mock}/>
            </BrowserRouter>
        );

        const testHome = screen.getByText(/Actors/i);
        expect(testHome).toBeInTheDocument();
    });
});