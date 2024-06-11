import {render, screen, userEvent} from '@/testUtils/testUtils';
import {Login} from './index';

function setup() {
  return render(<Login />);
}

it('must input email', async () => {
  const email = 'test@test.com';
  setup(); // renderizar
  const element = screen.getByTestId('email-log-in-input'); // pegar elemento
  await userEvent.type(element, email);
  expect(element).toHaveDisplayValue(email); // pegar elemento
});

it('password log in input', async () => {
  const password = '123123';
  setup();
  const element = screen.getByTestId('password-log-in-input');
  await userEvent.type(element, password);
  expect(element).toHaveDisplayValue(password);
});
