import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MovieSearchForm from './MovieSearchForm';

describe("Testing the MovieSearchForm component", () => {
  test("render MovieSearchForm and test button", () => {
      const { getByRole } = render(
          <BrowserRouter>
              <MovieSearchForm />
          </BrowserRouter>
        )
        let myBtn = getByRole('button');
        fireEvent.click(myBtn);
  });

  test("render MovieSearchForm and test input empty", () => {
    const { getByRole } = render(
        <BrowserRouter>
            <MovieSearchForm />
        </BrowserRouter>
      )
      let myInput = getByRole('textbox');
      expect(myInput).toHaveValue('');
  });

  test("render MovieSearchForm and test input change the value", () => {
    const { getByRole } = render(
        <BrowserRouter>
            <MovieSearchForm />
        </BrowserRouter>
      )
      let myInput = getByRole('textbox');
      fireEvent.change(myInput, { target: {value: 'Spiderman'}})
      expect(myInput).toHaveValue('Spiderman');
  });
});

