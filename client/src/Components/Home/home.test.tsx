import { render, screen } from '@testing-library/react';
import ComponentHome from './home';
import { BrowserRouter } from 'react-router-dom';

describe('Testing for the Home Component Label', () => {
    test(`When the component is rendered, then the Home Component must be present`, async () => {
        render(
            <BrowserRouter>
                <ComponentHome />
            </BrowserRouter>
        );
        //const testHome = screen.getByText(/Welcome to/i);
        //console.log('home', testHome);
        //expect(testHome).toBeInTheDocument();
        const testHome = screen.getAllByText(/Welcome to/i);
        expect(testHome[0]).toBeInTheDocument();
    });
});
