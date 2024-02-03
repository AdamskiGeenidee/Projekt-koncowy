import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyAo7vJOMlebDmZmUcR5MT8n7a26xetSlZ0",
    authDomain: "expensescalcapp-362d7.firebaseapp.com",
    databaseURL: "https://expensescalcapp-362d7-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "expensescalcapp-362d7",
    storageBucket: "expensescalcapp-362d7.appspot.com",
    messagingSenderId: "861627301059",
    appId: "1:861627301059:web:4d759188c6fbb87d8ff676"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
console.log("Firebase initialized");
export const db = getDatabase(app);