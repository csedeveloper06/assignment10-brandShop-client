// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTByzGBqg8LF8fan0yfAK05mLtg_ItaEE",
  authDomain: "assignment10-firebase-auth.firebaseapp.com",
  projectId: "assignment10-firebase-auth",
  storageBucket: "assignment10-firebase-auth.appspot.com",
  messagingSenderId: "726075775343",
  appId: "1:726075775343:web:5653ebf843f46bf150709a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;