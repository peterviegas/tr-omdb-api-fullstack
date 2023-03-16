import { render, screen } from '@testing-library/react';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import Router from '../Router/router';
import ComponentNotFound from './notfound';

describe('Testing Component Not Found', () => {
    test('renders demonstrating 404 not found error when user navigates to an invalid path', () => {
        render(
            <MemoryRouter initialEntries={['/invalid']}>
                <Router />
            </MemoryRouter>
        );
        expect(screen.getByText(/404/i)).toBeInTheDocument();
    });

    test('renders Component Not Found and looks for text related to the 404 error', () => {
        render(
            <BrowserRouter>
                <ComponentNotFound />
            </BrowserRouter>
        );
        const titleElement = screen.getByText(/Error 404 : Not Found!/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('renders Component Not Found and looks for text Go to Home', () => {
        render(
            <BrowserRouter>
                <ComponentNotFound />
            </BrowserRouter>
        );
        const titleElement = screen.getByText(/Go to Home/i);
        expect(titleElement).toBeInTheDocument();
    });
});
