// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjnD57E9jx4ds0yJNF2A2meKnuwTIurlQ",
  authDomain: "mern-book-5b490.firebaseapp.com",
  projectId: "mern-book-5b490",
  storageBucket: "mern-book-5b490.appspot.com",
  messagingSenderId: "564748252588",
  appId: "1:564748252588:web:bae39d5459cad9a56cf609"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;