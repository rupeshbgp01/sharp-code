// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw9PKJj5RI5VCUcbkSQqDGhryXLbQk7HI",
  authDomain: "sharpcode-b1d9a.firebaseapp.com",
  projectId: "sharpcode-b1d9a",
  storageBucket: "sharpcode-b1d9a.appspot.com",
  messagingSenderId: "52561003536",
  appId: "1:52561003536:web:f3cfaed878fddba00bf695",
  measurementId: "G-1GHH4RZ0WT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);