// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAyRH4otR4nbxUH8dDh8adkM6FCOap9RLA",
  authDomain: "vjti-1de87.firebaseapp.com",
  projectId: "vjti-1de87",
  storageBucket: "vjti-1de87.appspot.com",
  messagingSenderId: "28482962857",
  appId: "1:28482962857:web:5b8b21949536ae946bb0b8",
  measurementId: "G-3L8BTKVJQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
export { app, auth };