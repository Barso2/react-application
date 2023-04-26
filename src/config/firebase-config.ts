// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsBp7eAbeQvvy5gayXnLpSTBVY15Ovvyc",
  authDomain: "bakery-4918e.firebaseapp.com",
  projectId: "bakery-4918e",
  storageBucket: "bakery-4918e.appspot.com",
  messagingSenderId: "164874169118",
  appId: "1:164874169118:web:a40dfce401e4f287bc770f",
  measurementId: "G-L84WP1905T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseApp = initializeApp(firebaseConfig);