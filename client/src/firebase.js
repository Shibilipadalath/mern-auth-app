// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-app-16fd3.firebaseapp.com",
  projectId: "mern-auth-app-16fd3",
  storageBucket: "mern-auth-app-16fd3.firebasestorage.app",
  messagingSenderId: "551569060688",
  appId: "1:551569060688:web:5b890227b4088d6b373255"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);