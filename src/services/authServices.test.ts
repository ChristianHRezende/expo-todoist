import {signIn} from './authServices';

it('must signIn user', async () => {
  // test
  // input for login
  const email = 'ajifuome@agbis.tv';
  const password = '11.5592';

  try {
    const response = await signIn({email, password}); // call signIn with props before
    expect(response).toBe(201);
  } catch (error) {
    throw error;
  }
});
