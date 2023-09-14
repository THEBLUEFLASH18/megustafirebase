// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgm6hyE-VP4LUmKH6H2h9W0E3epEvsdlg",
  authDomain: "megustafirebase-24fc8.firebaseapp.com",
  projectId: "megustafirebase-24fc8",
  storageBucket: "megustafirebase-24fc8.appspot.com",
  messagingSenderId: "163410271076",
  appId: "1:163410271076:web:d6702d7b8d8832d3feb871"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const button = document.getElementById('button')