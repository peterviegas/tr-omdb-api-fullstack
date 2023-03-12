import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Router from "../../src/Components/router";

test("Router Home", async () => {
	render(
		<MemoryRouter initialEntries={["/"]}>
		<Router />
		</MemoryRouter>
	);
	expect(screen.getByText(/Welcome to/i)).toBeInTheDocument();
});

test("Router MovieList", async () => {
	render(
		<MemoryRouter initialEntries={["/MovieList"]}>
		<Router />
		</MemoryRouter>
	);
	expect(screen.getByText(/MoviesList/i)).toBeInTheDocument();
});

test("Router Movie", async () => {
	render(
		<MemoryRouter initialEntries={["/Movie/3fe67f8"]}>
		<Router />
		</MemoryRouter>
	);
	expect(screen.getByText(/Other movies of your search list/i)).toBeInTheDocument();
});

test("Router About", async () => {
	render(
		<MemoryRouter initialEntries={["/About"]}>
		<Router />
		</MemoryRouter>
	);
	expect(screen.getByText(/About PNGC_IMDB/i)).toBeInTheDocument();
});

test("Router Team", async () => {
	render(
		<MemoryRouter initialEntries={["/Team"]}>
		<Router />
		</MemoryRouter>
	);
	expect(screen.getByText(/Our Team/i)).toBeInTheDocument();
});

test("renders demonstrating 404 not found error when user navigates to an invalid path", () => {
  render(
    <MemoryRouter initialEntries={["/invalid"]}>
      <Router />
    </MemoryRouter>
  );
  expect(screen.getByText(/404/i)).toBeInTheDocument();
});