// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA2RYWMN9UvlZB-SU5-qEHKlIrJ1wyFupk",
	authDomain: "mern-book-inventory-875fe.firebaseapp.com",
	projectId: "mern-book-inventory-875fe",
	storageBucket: "mern-book-inventory-875fe.appspot.com",
	messagingSenderId: "994517702834",
	appId: "1:994517702834:web:1c7a45226cf0d6291351ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;