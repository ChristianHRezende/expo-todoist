import '@testing-library/react-native/extend-expect';

//mock used in test integration or united witch react and firebase

// isoled img,  not to effect renderized
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

/*
Este mock substitui o módulo firebase/auth do Firebase com um objeto que simula as funções getAuth, signInWithEmailAndPassword e createUserWithEmailAndPassword.
getAuth retorna uma string simulando uma instância do serviço de autenticação.
signInWithEmailAndPassword e createUserWithEmailAndPassword retornam promessas resolvidas com o valor 201, simulando a execução bem-sucedida dessas operações de autenticação e criação de usuário.

*/
