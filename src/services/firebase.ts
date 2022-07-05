import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBKTyYHIynpZnjGyrfY2pDPPTysX68fIUo',
  authDomain: 'reacteducation-3031b.firebaseapp.com',
  projectId: 'reacteducation-3031b',
  storageBucket: 'reacteducation-3031b.appspot.com',
  messagingSenderId: '8175397490',
  appId: '1:8175397490:web:d377ca08514a6efaabb0eb',
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

export const signUp = async (email: string, password: string) =>
  await createUserWithEmailAndPassword(firebaseAuth, email, password);

export const logIn = async (email: string, password: string) =>
  await signInWithEmailAndPassword(firebaseAuth, email, password);

export const logOut = async () => await signOut(firebaseAuth);

const db = getDatabase(app);

export const userRef = ref(db, 'user');
export const messagesRef = ref(db, 'messages');

export const getChatById = (chatId: string) => ref(db, `messages/${chatId}`);

export const getMessageListById = (chatId: string) =>
  ref(db, `messages/${chatId}/messageList/`);
