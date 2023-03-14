import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MovieList from './MovieList';

describe("Testing for the about Component MovieList", () => {
    test("render the MovieList class of the component", () => {
        render(
            <BrowserRouter>
                <MovieList />
            </BrowserRouter>
          )
        screen.queryByRole('class',{description: `movieList`})
      });
});
