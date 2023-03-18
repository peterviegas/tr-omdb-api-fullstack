import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ComponentFooter from './footer';

describe('Testing for the Footer Component Label', () => {
    test(`When the component is rendered, then the Footer Component must be present`, async () => {
        render(
            <BrowserRouter>
                <ComponentFooter />
            </BrowserRouter>
        );

        const testHome = screen.getByText(/© 2023 PNGC/i);

        expect(testHome).toBeInTheDocument();
    });
});
