import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ComponentAbout from './about';

describe('Testing for the about Component Label', () => {
    test(`When the About component is rendered, text This website must be present`, async () => {
        render(
            <BrowserRouter>
                <ComponentAbout />
            </BrowserRouter>
        );

        const testHome = screen.getByText(
            /This website created by PNGC group./i
        );
        expect(testHome).toBeInTheDocument();
    });

    test(`When the About component is rendered, text About PNGC_IMDB must be present`, async () => {
        render(
            <BrowserRouter>
                <ComponentAbout />
            </BrowserRouter>
        );

        const testHome = screen.getByText(/About PNGC_IMDB/i);
        expect(testHome).toBeInTheDocument();
    });

    test(`When the About component is rendered, text Welcome to must be present`, async () => {
        render(
            <BrowserRouter>
                <ComponentAbout />
            </BrowserRouter>
        );

        const testHome = screen.getByText(/Welcome to/i);
        expect(testHome).toBeInTheDocument();
    });
});
