// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDpmrvAGXFfQCEvefNMA6iD85y4L9HxxIs",
  authDomain: "ainterview-f262f.firebaseapp.com",
  projectId: "ainterview-f262f",
  storageBucket: "ainterview-f262f.firebasestorage.app",
  messagingSenderId: "57312008680",
  appId: "1:57312008680:web:b2307561ff80f8f1d5ac5d",
  measurementId: "G-L47JH6DQYK"
};
const app = !getApps.length ? initializeApp(firebaseConfig): getApp()

export const auth = getAuth(app);
export const db= getFirestore(app)