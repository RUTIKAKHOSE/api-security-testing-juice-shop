// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq2eUD_-V12fJ2ktR_FG4nhPMgydT_bjo",
  authDomain: "link-96686.firebaseapp.com",
  projectId: "link-96686",
  storageBucket: "link-96686.appspot.com",
  messagingSenderId: "43465020061",
  appId: "1:43465020061:web:1d7929b4c2695ece903a74",
  measurementId: "G-75H0YY4SGQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);