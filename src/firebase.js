// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK6zsoBSeGhQcP1fodGNnE1bDRdBOlbyY",
  authDomain: "fadhil-wedding.firebaseapp.com",
  projectId: "fadhil-wedding",
  storageBucket: "fadhil-wedding.appspot.com",
  messagingSenderId: "305212356143",
  appId: "1:305212356143:web:d40e06db99f8f4711ff8da",
  measurementId: "G-94S803ECF4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
