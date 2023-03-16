import { render, screen } from '@testing-library/react';
import ComponentHeader from './Header';
import { BrowserRouter } from 'react-router-dom';
import ComponentNavlink from '../Navlink/Navlink';

describe('Testing for the Header Component Label', () => {
    test(`When the component is rendered, then the Header Component must be present`, async () => {
        render(
            <BrowserRouter>
                <ComponentHeader />
            </BrowserRouter>
        );
        const testHome = screen.getByText(/PNGC IMDB/i);
        expect(testHome).toBeInTheDocument();
    });
});

describe('Test for header component navigation', () => {
    test(`When the component is rendered, then the Header Component must be present`, async () => {
        render(
            <BrowserRouter>
                <ComponentNavlink />
            </BrowserRouter>
        );
        const testHome = screen.getByText(/home/i);
        expect(testHome).toBeInTheDocument();
    });
});
