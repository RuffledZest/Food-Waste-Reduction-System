// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOGtPoVOK_SSvyEkyEwq1pfgzB3yqaoSo",
  authDomain: "fwrs-a9a61.firebaseapp.com",
  projectId: "fwrs-a9a61",
  storageBucket: "fwrs-a9a61.appspot.com",
  messagingSenderId: "173345282514",
  appId: "1:173345282514:web:de72354ce58b7534eb100b",
  measurementId: "G-G26Q4QK9ZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);