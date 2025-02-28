import { render, screen } from '@testing-library/react';
import Chat from '../components/Chat';

test('Renders chat component', () => {
  render(<Chat currentUser="user1" />);
  expect(screen.getByText('Chat with user2')).toBeInTheDocument();
});