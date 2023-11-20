import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey:  import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "coder-gamer.firebaseapp.com",
  projectId: "coder-gamer",
  storageBucket: "coder-gamer.appspot.com",
  messagingSenderId: "559728500542",
  appId: "1:559728500542:web:54e408903b29a5cd99166f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);