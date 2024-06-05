import '@testing-library/react-native/extend-expect';

//mock
jest.mock('expo-image', () => ({
  Image: () => null,
}));

// firebase global mock
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
