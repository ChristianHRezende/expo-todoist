import {render, screen} from '@/testUtils/testUtils';
import {Welcome} from './Welcome';

it('must render welcome-title text', () => {
  render(<Welcome />);
  const element = screen.getByText("Let's Organize Your Note TODO");
  expect(element).toBeOnTheScreen();
});

it('must render welcome-subtitle text', () => {
  render(<Welcome />);
  const element = screen.getByText(
    'Make your todo in the note and manage your priority activity in daily life to achieve goals.',
  );
  expect(element).toBeOnTheScreen();
});

it('must render welcome-welcome-get-started button', () => {
  render(<Welcome />);
  const element = screen.getByTestId('welcome-welcome-get-started');
  expect(element).toBeOnTheScreen();
});

it('must render welcome-welcome-sign-in button', () => {
  render(<Welcome />);
  const element = screen.getByTestId('welcome-welcome-sign-in');
  expect(element).toBeOnTheScreen();
});
