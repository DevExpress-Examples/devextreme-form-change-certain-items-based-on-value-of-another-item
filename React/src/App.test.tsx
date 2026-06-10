import { render, screen } from '@testing-library/react';
import App from './App.tsx';

test('renders the employee details form', () => {
  render(<App />);
  const titleElement = screen.getByText(/employee details/i);
  expect(titleElement).toBeInTheDocument();
});
