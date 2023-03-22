import { render, screen } from '@testing-library/react';
import ComponentHeader from './header';
import { BrowserRouter } from 'react-router-dom';
import ComponentNavlink from '../Navlink/navlink';

describe('Testing for the Header Component Label', () => {
    test(`When the component is rendered, then the Header Component must be present`, async () => {
        render(
            <BrowserRouter>
                <ComponentHeader />
            </BrowserRouter>
        );
        //const testHome = screen.getByText(/PNGC IMDB/i);
        //expect(testHome).toBeInTheDocument();
        const testHeader = screen.getAllByText(/PNGC IMDB/i);
        expect(testHeader[0]).toBeInTheDocument();
    });
});

describe('Test for header component navigation', () => {
    test(`When the component is rendered, then the Header Component must be present`, async () => {
        render(
            <BrowserRouter>
                <ComponentNavlink />
            </BrowserRouter>
        );
        //const testHome = screen.getByText(/home/i);
        //expect(testHome).toBeInTheDocument();
        const testHeader = screen.getAllByText(/Home/i);
        expect(testHeader[0]).toBeInTheDocument();
    });
});
