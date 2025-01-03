// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNjxs0C2j7u-caUL0mCdaJmF5P-dD7QgE",
  authDomain: "netflix-gpt-9cbdb.firebaseapp.com",
  projectId: "netflix-gpt-9cbdb",
  storageBucket: "netflix-gpt-9cbdb.firebasestorage.app",
  messagingSenderId: "348718246029",
  appId: "1:348718246029:web:7d5224084856d9d0e59ac4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
