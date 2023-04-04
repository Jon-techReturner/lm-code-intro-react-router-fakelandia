import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';

test('App render and the user can navigate to the page', async () => {
  render(<App />);
  const user = userEvent.setup();
  console.log(screen.debug);
  expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
});
