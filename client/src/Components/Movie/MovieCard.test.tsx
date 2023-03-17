import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MovieCard from './MovieCard';

describe('Testing for the about Component MoviePage', () => {
    test(`When the MovieCard component renders, the IMdb text should be present`, async () => {
        render(
            <BrowserRouter>
                <MovieCard />
            </BrowserRouter>
        );

        const testHome = screen.getByText(/IMdb/i);
        expect(testHome).toBeInTheDocument();
    });

    test(`When the MovieCard component renders, the Actors text should be present`, async () => {
        render(
            <BrowserRouter>
                <MovieCard />
            </BrowserRouter>
        );

        const testHome = screen.getByText(/Actors/i);
        expect(testHome).toBeInTheDocument();
    });
});
