import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MovieList from './MovieList';

describe("Testing for the about Component MovieList", () => {
	test(`When the MovieList component renders, the Director text must be present`, async () => {
        render(
            <BrowserRouter>
             <MovieList />
            </BrowserRouter>
            );

        const testHome = screen.getByText(/Director/i);
        expect(testHome).toBeInTheDocument();
    });

	test(`When the MovieList component renders, the text Actors must be present`, async () => {
        render(
            <BrowserRouter>
             <MovieList />
            </BrowserRouter>
            );

        const testHome = screen.getByText(/Actors/i);
        expect(testHome).toBeInTheDocument();
    });
});