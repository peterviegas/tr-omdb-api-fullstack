import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ComponentNavlink from './Navlink';
import Header from '../Header/Header';

describe('Testing for the Navlink Component Home', () => {
    test('renders Home', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        const titleElement = screen.getByText(/Home/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('renders Home direct ComponentNavlink', () => {
        render(
            <BrowserRouter>
                <ComponentNavlink />
            </BrowserRouter>
        );
        const titleElement = screen.getByText(/Home/i);
        expect(titleElement).toBeInTheDocument();
    });
});

describe('Testing for the Navlink Component MoviesList', () => {
    test('renders MoviesList', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        const titleElement = screen.getByText(/Wishlist/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('renders MoviesList direct ComponentNavlink', () => {
        render(
            <BrowserRouter>
                <ComponentNavlink />
            </BrowserRouter>
        );
        const titleElement = screen.getByText(/Wishlist/i);
        expect(titleElement).toBeInTheDocument();
    });
});

/*
describe("Testing for the Navlink Component Movie", () => {
	test("renders Movie", () => {
		render(
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		);
		const titleElement=screen.getByText('Movie');
		expect(titleElement).toBeInTheDocument();
	});
	
	test("renders Movie direct ComponentNavlink", () => {
		render(
			<BrowserRouter>
				<ComponentNavlink />
			</BrowserRouter>
		);
		const titleElement=screen.getByText('Movie');
		expect(titleElement).toBeInTheDocument();
	});
});
*/
describe('Testing for the Navlink Component About', () => {
    test('renders About', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        const titleElement = screen.getByText(/About/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('renders About direct ComponentNavlink', () => {
        render(
            <BrowserRouter>
                <ComponentNavlink />
            </BrowserRouter>
        );
        const titleElement = screen.getByText(/About/i);
        expect(titleElement).toBeInTheDocument();
    });
});

describe('Testing for the Navlink Component Team', () => {
    test('renders Team', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        );
        const titleElement = screen.getByText(/Team/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('renders Team direct ComponentNavlink', () => {
        render(
            <BrowserRouter>
                <ComponentNavlink />
            </BrowserRouter>
        );
        const titleElement = screen.getByText(/Team/i);
        expect(titleElement).toBeInTheDocument();
    });
});
