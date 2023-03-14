import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MoviesContextProvider from './MovieProvider';

describe("Testing for the about Component MoviesContextProvider", () => {
	test(`When the MoviesContextProvider component renders it must navigate to the MovieList component, the Director text must be present`, async () => {
        render(
            <BrowserRouter>
             <MoviesContextProvider />
            </BrowserRouter>
            );

        const testHome = screen.getByText(/Director/i);
        expect(testHome).toBeInTheDocument();
    });

	test(`When the Movie Context Provider component renders it must navigate to the MovieList component, the text Actors must be present`, async () => {
        render(
            <BrowserRouter>
             <MoviesContextProvider />
            </BrowserRouter>
            );

        const testHome = screen.getByText(/Actors/i);
        expect(testHome).toBeInTheDocument();
    });
});