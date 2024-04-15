

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCcdI1-1Xo66WtTrEWcTe4Hx9lkWw52hVk",
  authDomain: "disneyplus-clone-f22af.firebaseapp.com",
  projectId: "disneyplus-clone-f22af",
  storageBucket: "disneyplus-clone-f22af.appspot.com",
  messagingSenderId: "613386906991",
  appId: "1:613386906991:web:8fb9f84001e72a538d4c9a",
  measurementId: "G-ES9KKQXHKE"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
