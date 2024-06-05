import {initializeApp} from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyBBx0H-sCfkzpi9EgKEZZ0BJJYV6j1a7Q8',
  authDomain: 'todoist-83a74.firebaseapp.com',
  projectId: 'todoist-83a74',
  storageBucket: 'todoist-83a74.appspot.com',
  messagingSenderId: '284726307976',
  appId: '1:284726307976:web:f0b0d8974f04b90058433d',
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
