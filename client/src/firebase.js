// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "olx-clone-69b69.firebaseapp.com",
  projectId: "olx-clone-69b69",
  storageBucket: "olx-clone-69b69.firebasestorage.app",
  messagingSenderId: "429081211746",
  appId: "1:429081211746:web:1e07b4735e9d8c6f2c323b",
  measurementId: "G-7JXQSZN12P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);