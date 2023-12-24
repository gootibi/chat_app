// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFqVm2eOROuK_kfqHJEpjCsMCCD7378vQ",
  authDomain: "chat-app-64f69.firebaseapp.com",
  projectId: "chat-app-64f69",
  storageBucket: "chat-app-64f69.appspot.com",
  messagingSenderId: "875382831530",
  appId: "1:875382831530:web:0c32f8fd3b723ae0ee93d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);