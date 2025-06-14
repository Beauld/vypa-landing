import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

test('renders dashboard title', () => {
  render(<Dashboard />);
  const title = screen.getByText(/Vypa Dashboard/i);
  expect(title).toBeInTheDocument();
});
