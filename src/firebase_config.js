
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBtJ_kNukOH42ITPpgp-KeEZZkrYJ8O_D0",
  authDomain: "ecommerce-6eda3.firebaseapp.com",
  projectId: "ecommerce-6eda3",
  storageBucket: "ecommerce-6eda3.appspot.com",
  messagingSenderId: "465377436754",
  appId: "1:465377436754:web:b21563803f1d15e808ab8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage =getStorage(app);
export const auth = getAuth(app);
export default app;