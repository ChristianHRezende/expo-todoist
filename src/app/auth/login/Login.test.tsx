import {render, screen} from '@/testUtils/testUtils';
import {Login} from './index';

function setup() {
  return render(<Login />);
}

it('render text', async () => {
  setup(); // renderizar
  const element = screen.getByText('render-pag-login'); // pegar elemento
  expect(element).toBeOnTheScreen(); // pegar elemento
});
