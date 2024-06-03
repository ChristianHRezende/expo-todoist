import {render, screen} from '@/testUtils/testUtils';
import App from './App';
/**
 * Integration Tests
 */

it("should render my friend's name", () => {
  //Given
  const name = 'Carlinhos';
  // Execution
  render(<App />);
  const elementContainingName = screen.getByText(name);
  // Assert
  expect(elementContainingName).toBeOnTheScreen();
});
