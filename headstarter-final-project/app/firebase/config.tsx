// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVjz0K-idS8bSUHEWIsitJxO3MmwlX9Dg",
  authDomain: "headstarter-track-a.firebaseapp.com",
  projectId: "headstarter-track-a",
  storageBucket: "headstarter-track-a.appspot.com",
  messagingSenderId: "293439603793",
  appId: "1:293439603793:web:f32889a1bfadfc545fa470",
  measurementId: "G-R9M51QLHCE"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const auth = getAuth(app)

export { app, auth };
// const analytics = getAnalytics(app);
