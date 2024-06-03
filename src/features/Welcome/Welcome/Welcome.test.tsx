import {render, screen} from '@testing-library/react-native';
import {Welcome} from './Welcome';

it('must render welcome-title text', () => {
  render(<Welcome />);
  const element = screen.getByText("Let's Organize Your Note TODO");
  expect(element).toBeOnTheScreen();
});
