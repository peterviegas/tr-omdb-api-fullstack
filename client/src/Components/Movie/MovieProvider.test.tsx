import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ComponentMovieProvider from './MovieProvider';

describe('Testing for the ComponentMovieProvider - navigating to the component MoviesContextProvider', () => {
    test(`When the component is rendered, then the Home option must be present`, async () => {
        render(
            <BrowserRouter>
                <ComponentMovieProvider />
            </BrowserRouter>
        );
        const testHome = screen.getByText(/Similar movies you may like/i);
        expect(testHome).toBeInTheDocument();
    });

	test(`When the Loading function renders, checks if it is present through the quantity loading`, async () => {
        const { container } = render(
            <BrowserRouter>
                <ComponentMovieProvider />
            </BrowserRouter>
            );
			const testHome = container.querySelectorAll('.loading');
        expect(testHome.length).toBe(1);
    });

});

describe('Testing for the ComponentMovieProvider - navigating to the component MoviePage', () => {
    test(`When the component is rendered, then the Actors text must be present`, async () => {
        render(
            <BrowserRouter>
                <ComponentMovieProvider />
            </BrowserRouter>
        );
        const testActors = screen.getByText(/Actors/i);
        expect(testActors).toBeInTheDocument();
    });
});