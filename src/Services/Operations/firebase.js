import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDw9PKJj5RI5VCUcbkSQqDGhryXLbQk7HI",
  authDomain: "sharpcode-b1d9a.firebaseapp.com",
  projectId: "sharpcode-b1d9a",
  storageBucket: "sharpcode-b1d9a.appspot.com",
  messagingSenderId: "52561003536",
  appId: "1:52561003536:web:f3cfaed878fddba00bf695",
  measurementId: "G-1GHH4RZ0WT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
export default auth;