// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHEcKD_HwIrG1N6BbHO6ppAKZrfNp7vWo",
  authDomain: "shippo-football-academy.firebaseapp.com",
  projectId: "shippo-football-academy",
  storageBucket: "shippo-football-academy.appspot.com",
  messagingSenderId: "864061814994",
  appId: "1:864061814994:web:591e88567ba7688f0e950b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;