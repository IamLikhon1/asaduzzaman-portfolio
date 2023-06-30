// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO5qAtxYnAdBSxMT-LQFNhgOxjVmnThPU",
  authDomain: "asaduzzaman-portfolio.firebaseapp.com",
  projectId: "asaduzzaman-portfolio",
  storageBucket: "asaduzzaman-portfolio.appspot.com",
  messagingSenderId: "839185534200",
  appId: "1:839185534200:web:b2067f89fef923a4d37f0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;