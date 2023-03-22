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
        const testHome = screen.getAllByText(/Home/i);
        expect(testHome[0]).toBeInTheDocument();
    });

	test(`When the component is rendered, then the Wishlist option must be present`, async () => {
        render(
            <BrowserRouter>
                <ComponentMainlayout />
            </BrowserRouter>
        );
        const testWishlist = screen.getAllByText(/Watchlist/i);
        expect(testWishlist[0]).toBeInTheDocument();
    });

	test(`When the component is rendered, then the About option must be present`, async () => {
        render(
            <BrowserRouter>
                <ComponentMainlayout />
            </BrowserRouter>
        );
        const testAbout = screen.getAllByText(/About/i);
        expect(testAbout[0]).toBeInTheDocument();
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