import {render, screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import MoviesContextProvider from './MoviesContextProvider';

interface MoviesProviderProp {
    children: React.ReactNode;
}

const mock: MoviesProviderProp = {
	children: 'Test Loading',
}

test(`When the MoviesContextProvider component is rendered, will get the load value for the page`, async () => {
	render(
		<BrowserRouter>
			<MoviesContextProvider {...mock}/>
		</BrowserRouter>
	);
	const testMovie = screen.getByText(/Test Loading/i);
	expect(testMovie).toBeInTheDocument();
});