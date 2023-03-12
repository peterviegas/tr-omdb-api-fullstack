import { render, screen } from '@testing-library/react';
import React from 'react';
import ErrorComponent from './ErrorComponent';

interface ErrorProp {
  children: React.ReactNode;
}

describe("Testing for the ErrorMessagesAPI error404", () => {
  test(`renders ErrorMessagesAPI,
    checks for the existence of the message error control error404:`, async () => {
      //const onChange = jest.fn();
      const mock: ErrorProp = {
          children: '⛔️ Error: 404 URL not found!',
      };
      render(<ErrorComponent {...mock} />);
      screen.queryByRole('alertdialog', { description: `⛔️ Error: 404 URL not found!` });
  });
});

describe("Testing for the ErrorMessagesAPI error500", () => {
  test(`renders ErrorMessagesAPI,
    checks for the existence of the message error control error500:`, async () => {
      //const onChange = jest.fn();
      const mock: ErrorProp = {
          children: '⛔️ Error: 500 Unexpected error while processing request',
      };
      render(<ErrorComponent {...mock} />);
      screen.queryByRole('alertdialog', { description: `⛔️ Error: 500 Unexpected error while processing request` });
  });
});

describe("Testing for the ErrorMessagesAPI errorFetch", () => {
  test(`renders ErrorMessagesAPI,
    checks for the existence of the message error control errorFetch:`, async () => {
      //const onChange = jest.fn();
      const mock: ErrorProp = {
          children: '⛔️ Error: Something went wrong in fetching data ',
      };
      render(<ErrorComponent {...mock} />);
      screen.queryByRole('alertdialog', { description: `⛔️ Error: Something went wrong in fetching data ` });
  });
});

describe("Testing for the ErrorMessagesAPI errorPost", () => {
  test(`renders ErrorMessagesAPI,
    checks for the existence of the message error control errorPost:`, async () => {
      //const onChange = jest.fn();
      const mock: ErrorProp = {
          children: '⛔️ Error: 404 URL not found!',
      };
      render(<ErrorComponent {...mock} />);
      screen.queryByRole('alertdialog', { description: `⛔️ Error: Something went wrong in posting data ` });
  });
});