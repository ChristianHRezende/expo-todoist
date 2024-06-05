import {signIn} from './authServices';

// Global
jest.mock('firebase/auth', () => {
  return {
    getAuth: () => '8MJF9GjnGMhlX7Mod',
    signInWithEmailAndPassword: () =>
      new Promise(resolve => {
        resolve(201);
      }),
    createUserWithEmailAndPassword: () =>
      new Promise(resolve => {
        resolve(201);
      }),
  };
});

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
