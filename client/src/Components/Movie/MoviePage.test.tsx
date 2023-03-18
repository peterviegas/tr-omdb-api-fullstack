import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MoviePage from './MoviePage';

describe("Testing for the about Component MoviePage", () => {
    test(`When the MoviePagecomponent is rendered, the text Other movies of your search list must be present`, async () => {
        render(
            <BrowserRouter>
             <MoviePage />
            </BrowserRouter>
            );

        const testHome = screen.getByText(/Similar movies you may like/i);
        expect(testHome).toBeInTheDocument();
    });

	test(`When the MoviePage component renders and should navigate to the MovieCard component, the IMdb text should be present`, async () => {
        render(
            <BrowserRouter>
             <MoviePage />
            </BrowserRouter>
            );

        const testHome = screen.getByText(/IMdb/i);
        expect(testHome).toBeInTheDocument();
    });

	test(`When the MoviePage component renders and should navigate to the MovieCard component, the Actors text should be present`, async () => {
        render(
            <BrowserRouter>
             <MoviePage />
            </BrowserRouter>
            );

        const testHome = screen.getByText(/Actors/i);
        expect(testHome).toBeInTheDocument();
    });
});