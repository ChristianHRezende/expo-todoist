import {signIn} from './authServices';

it('must signIn user', async () => {
  const email = 'ajifuome@agbis.tv';
  const password = '11.5592';
  try {
    const response = await signIn({email, password});
    expect(response).toBe(201);
  } catch (error) {
    throw error;
  }
});
