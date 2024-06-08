import {render, screen} from '@/testUtils/testUtils';
import {Login} from './index';

function setup() {
  return render(<Login />);
}

it('must input email', async () => {
  setup(); // renderizar
  const element = screen.getByText('texto'); // pegar elemento
  expect(element).toBeOnTheScreen(); // pegar elemento
});
