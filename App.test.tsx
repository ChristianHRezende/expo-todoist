import {render, screen} from '@testing-library/react-native';
import App from './App';
/**
 * Integration Tests
 */

it.skip("should render my friend's name", () => {
  //Given
  const name = 'Carlinhos';
  // Execution
  render(<App />);
  const elementContainingName = screen.getByText(name);

  // Assert
  expect(elementContainingName).toBeVisible();
});
