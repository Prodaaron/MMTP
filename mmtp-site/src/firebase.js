// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzOq4NZzCKJ_QjuRRLdqB62-9rLNHrpiY",
  authDomain: "mmtp-mehha.firebaseapp.com",
  projectId: "mmtp-mehha",
  storageBucket: "mmtp-mehha.firebasestorage.app",
  messagingSenderId: "225946232316",
  appId: "1:225946232316:web:481ae43fe155f4d93dfe79",
  measurementId: "G-4VRCKME5SX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);