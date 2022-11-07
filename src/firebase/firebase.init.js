// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2aecqM7JBYMXHIpGLwe_8r5-Y2ZckuaU",
  authDomain: "photographer-wild.firebaseapp.com",
  projectId: "photographer-wild",
  storageBucket: "photographer-wild.appspot.com",
  messagingSenderId: "669452682614",
  appId: "1:669452682614:web:a074545c53fe3e7791a657"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;