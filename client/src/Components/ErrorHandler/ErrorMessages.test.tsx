import { render, screen } from '@testing-library/react';
import React from 'react';
import { ErrorMessagesAPI } from './ErrorMessages';

interface teste {
    error404: string;
    error500: string;
    errorFetch: string;
    errorPost: string;
}
test(`renders ErrorMessagesAPI,
	checks for the existence of the message error control:`, async () => {
    //const onChange = jest.fn();
    const mock: teste = {
        error404: '⛔️ Error: 404 URL not found!',
        error500: '⛔️ Error: 500 Unexpected error while processing request',
        errorFetch: '⛔️ Error: Something went wrong in fetching data ',
        errorPost: '⛔️ Error: Something went wrong in posting data ',
    };
    //render(<ErrorMessagesAPI {...mock} />);
    //screen.queryByRole('alertdialog', { description: `error500` });
});
