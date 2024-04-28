// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4V2JIDlyfgIdKxpguvmFU4bM0qLQPbvc",
  authDomain: "tourism-management-websi-a73be.firebaseapp.com",
  projectId: "tourism-management-websi-a73be",
  storageBucket: "tourism-management-websi-a73be.appspot.com",
  messagingSenderId: "52071572415",
  appId: "1:52071572415:web:8de9bcde924d6f9133b70a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;