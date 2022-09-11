import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from "./App";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: { page: {totalElements:0} } }),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

test("renders header on page load", async () => {
  render(<App />, {wrapper: MemoryRouter});
  const element = await screen.findByText(/Tickets/i);
  expect(element).toBeInTheDocument();
});

test("renders message on empty state", async () => {
  render(<App />, {wrapper: MemoryRouter});
  const element = await screen.findByText(/Try another search/i);
  expect(element).toBeInTheDocument();
});
