import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ComponentMainlayout } from './Mainlayout';

describe('Testing for the ComponentMainlayout - - navigating to the component ComponentHeader', () => {
    test(`When the component is rendered, then the Home option must be present`, async () => {
        render(
            <BrowserRouter>
                <ComponentMainlayout />
            </BrowserRouter>
        );
        const testHome = screen.getByText(/Home/i);
        expect(testHome).toBeInTheDocument();
    });

	test(`When the component is rendered, then the Wishlist option must be present`, async () => {
        render(
            <BrowserRouter>
                <ComponentMainlayout />
            </BrowserRouter>
        );
        const testWishlist = screen.getByText(/Watchlist/i);
        expect(testWishlist).toBeInTheDocument();
    });

	test(`When the component is rendered, then the About option must be present`, async () => {
        render(
            <BrowserRouter>
                <ComponentMainlayout />
            </BrowserRouter>
        );
        const testAbout = screen.getByText(/About/i);
        expect(testAbout).toBeInTheDocument();
    });
});

describe('Testing for the ComponentMainlayout - - navigating to the component ComponentFooter', () => {
    test(`When the component is rendered, then the Home option must be present`, async () => {
        render(
            <BrowserRouter>
                <ComponentMainlayout />
            </BrowserRouter>
        );
        const testFooter = screen.getByText(/© 2023 PNGC/i);
        expect(testFooter).toBeInTheDocument();
    });
});