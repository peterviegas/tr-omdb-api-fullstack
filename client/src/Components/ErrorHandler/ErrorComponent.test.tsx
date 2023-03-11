import { render, screen } from '@testing-library/react';
import React from 'react';
import ErrorComponent from './ErrorComponent';

interface ErrorProp {
  children: React.ReactNode;
}

test(`renders ErrorMessagesAPI,
	checks for the existence of the message error control:`, async () => {
    //const onChange = jest.fn();
    const mock: ErrorProp = {
        children: '⛔️ Error: 404 URL not found!',
    };
    render(<ErrorComponent {...mock} />);
    screen.queryByRole('alertdialog', { description: `⛔️ Error: 404 URL not found!` });
});