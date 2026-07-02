// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr5ZmXRieFi3tcoGKb26rk1cYkvL2pbHE",
  authDomain: "mulanga-madzimbalala.firebaseapp.com",
  projectId: "mulanga-madzimbalala",
  storageBucket: "mulanga-madzimbalala.firebasestorage.app",
  messagingSenderId: "254395538011",
  appId: "1:254395538011:web:4de7b407e2dd4dfbfcbd7e",
  measurementId: "G-V7MJR5NNYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);