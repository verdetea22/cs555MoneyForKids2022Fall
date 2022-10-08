// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2P30ZxQ_wH-Xpssnyy51eJot7U6ApffM",
  authDomain: "money-for-kids-5299c.firebaseapp.com",
  projectId: "money-for-kids-5299c",
  storageBucket: "money-for-kids-5299c.appspot.com",
  messagingSenderId: "27542417287",
  appId: "1:27542417287:web:69c346b063a2af049ead22",
  measurementId: "G-B43RPQCRR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export { auth }