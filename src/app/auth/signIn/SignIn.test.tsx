import {render, screen, userEvent} from '@/testUtils/testUtils';
import {SignIn} from './SignIn';

// function renderized
function setup() {
  return render(<SignIn />);
}

it('must input email', async () => {
  setup(); // render element
  const email = 'test@test.com';
  const element = screen.getByTestId('welcome-sign-in-input-email'); // input
  await userEvent.type(element, 'test@test.com'); // user type event simulation
  expect(element).toHaveDisplayValue(email); //assertion
});

it('must input email', async () => {
  const email = 'test@test.com';
  setup(); // render element
  const element = screen.getByTestId('welcome-sign-in-input-password'); // input
  await userEvent.type(element, email); // user type event simulation
  expect(element).toHaveDisplayValue(email); //assertion
});
