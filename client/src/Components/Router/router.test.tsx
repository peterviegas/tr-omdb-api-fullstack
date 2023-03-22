import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Router from './router';

test('Router Home', async () => {
    render(
        <MemoryRouter initialEntries={['/']}>
            <Router />
        </MemoryRouter>
    );
    expect(screen.getByText(/Welcome to/i)).toBeInTheDocument();
});

test('Router Watchlist', async () => {
    render(
        <MemoryRouter initialEntries={['/movielist/Last Action Hero']}>
            <Router />
        </MemoryRouter>
    );
    //expect(screen.getByText(/Watchlist/i)).toBeInTheDocument();
    const titleElement = screen.getAllByText(/Watchlist/i);
    expect(titleElement[0]).toBeInTheDocument();
});

test('Router Movie', async () => {
    render(
        <MemoryRouter initialEntries={['/movie/Last Action Hero/tt0107362']}>
            <Router />
        </MemoryRouter>
    );
    expect(
        screen.getByText(/Similar movies you may like/i)
    ).toBeInTheDocument();
});

test('Router About', async () => {
    render(
        <MemoryRouter initialEntries={['/About']}>
            <Router />
        </MemoryRouter>
    );
    expect(screen.getByText(/About PNGC_IMDB/i)).toBeInTheDocument();
});

test('Router Team', async () => {
    render(
        <MemoryRouter initialEntries={['/team']}>
            <Router />
        </MemoryRouter>
    );
    expect(screen.getByText(/Meet the Team/i)).toBeInTheDocument();
});

test('renders demonstrating 404 not found error when user navigates to an invalid path', () => {
    render(
        <MemoryRouter initialEntries={['/invalid']}>
            <Router />
        </MemoryRouter>
    );
    //expect(screen.getByText(/404/i)).toBeInTheDocument();
    const codError = screen.getAllByText(/404/i);
    expect(codError[0]).toBeInTheDocument();
});
