import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEn_fSvGAqqhtSVNEW4uhiiGgEZBwmhek",
  authDomain: "fbna-games.firebaseapp.com",
  projectId: "fbna-games",
  storageBucket: "fbna-games.appspot.com",
  messagingSenderId: "634119237523",
  appId: "1:634119237523:web:d51d672240edfacc33c266"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);