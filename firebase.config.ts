// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB6mUvNZITsNhfxTA_D6nbXcDlBGNLAjI",
  authDomain: "auth-f1b50.firebaseapp.com",
  projectId: "auth-f1b50",
  storageBucket: "auth-f1b50.appspot.com",
  messagingSenderId: "151239310022",
  appId: "1:151239310022:web:4954976f3a64486b6635c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);