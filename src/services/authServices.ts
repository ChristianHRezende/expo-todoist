import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
// MOCK - isolar a camada externa do teste

export type SignInParams = {
  email: string;
  password: string;
};

// defined function params signIn and signUp
// recived object with params and auth user and email
export async function signIn({email, password}: SignInParams) {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
}

export type SignUpParams = {
  email: string;
  password: string;
};

export async function signUp({email, password}: SignUpParams) {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
}

export type LoginParams = {
  email: string;
  password: string;
};

export async function logIn({email, password}: LoginParams) {
  const auth = getAuth();
  return signInWithEmailAndPassword(auth, email, password);
}
