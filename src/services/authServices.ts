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
