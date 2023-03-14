import { render, screen } from '@testing-library/react'
import React from 'react'
import App from './App'

test('renders class App', () => {
    render(<App />)
    screen.queryByRole('class',{description: `App`})
})

test('renders class movieList', () => {
    render(<App />)
    screen.queryByRole('class',{description: `movieList`})
})

test("render the App class of the component and navigates to Movies List", () => {
  render(
    <App />)
  screen.queryByRole('class',{description: `movieList`})
});