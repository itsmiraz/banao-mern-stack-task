// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF23bYZZ6T5Z8ASk_HeBMP6r9iyObS4hc",
  authDomain: "banaomernstacktask.firebaseapp.com",
  projectId: "banaomernstacktask",
  storageBucket: "banaomernstacktask.appspot.com",
  messagingSenderId: "443652586483",
  appId: "1:443652586483:web:8077bed63e1b149ef43086"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app