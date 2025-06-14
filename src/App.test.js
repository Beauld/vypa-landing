import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dashboard button', () => {
  render(<App />);
  const button = screen.getByText(/open dashboard/i);
  expect(button).toBeInTheDocument();
});
