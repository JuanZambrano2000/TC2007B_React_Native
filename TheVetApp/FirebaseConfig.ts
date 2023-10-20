// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGCXOQcApuwjqER9uSYIhiVWD1HPzN_Fo",
  authDomain: "the-vet-app-rn.firebaseapp.com",
  projectId: "the-vet-app-rn",
  storageBucket: "the-vet-app-rn.appspot.com",
  messagingSenderId: "607311710942",
  appId: "1:607311710942:web:01b5f22498d05a7ded104f",
  measurementId: "G-NHV3RZLLEF"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
const analytics = getAnalytics(FIREBASE_APP);