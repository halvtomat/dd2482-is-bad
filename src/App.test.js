import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
test('failing test', () => {
    render(<App />);
    const element = screen.getByText(/gibberish that dont exist/i);
    expect(element).toBeInTheDocument();
});

