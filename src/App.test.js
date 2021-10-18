import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Look at me mom, I can really write code!!!/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Look at me mom, I can really write code!!!/i);
  expect(linkElement).toBeInTheDocument();
});

