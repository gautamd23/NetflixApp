// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRMacGbfL8fYsSa3M8kfkrF5jM4FNOSFE",
  authDomain: "netflix-fdad6.firebaseapp.com",
  projectId: "netflix-fdad6",
  storageBucket: "netflix-fdad6.appspot.com",
  messagingSenderId: "73293476021",
  appId: "1:73293476021:web:66e96476eeb985e1830efc",
  measurementId: "G-N56TKPL47G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();