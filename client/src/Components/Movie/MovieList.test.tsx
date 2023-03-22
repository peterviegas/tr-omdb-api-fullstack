import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MovieList from './MovieList';
import App from './../../App';
/*
describe("Testing for the about Component MovieList", () => {
    test("render the MovieList class of the component", () => {
        render(
            <BrowserRouter>
                <MovieList />
            </BrowserRouter>
          )
        screen.queryByRole('class',{description: `movieList`})
      });
});*/


test('Provisory renders class App', () => {
  render(<App />)
  screen.queryByRole('class',{description: `App`})
})