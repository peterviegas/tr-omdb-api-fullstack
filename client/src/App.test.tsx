import { render, screen } from '@testing-library/react'
import React from 'react'
import App from './App'
import MovieList from './Components/Movie/MovieList';

test('renders class App', () => {
    render(<App />)
    screen.queryByRole('class',{description: `App`})
})

test('renders class movieList', () => {
    render(<App />)
    screen.queryByRole('class',{description: `movieList`})
})

test("renders class movieList of the component MovieList", () => {
render(
  <MovieList />
);
screen.queryByRole('class',{description: `movieList`})
});