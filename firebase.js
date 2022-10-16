import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDaN-PnEIMRUDMdxtsSzAhUpTdS1Eq75Rs",
    authDomain: "kollpotato-faf38.firebaseapp.com",
    projectId: "kollpotato-faf38",
    storageBucket: "kollpotato-faf38.appspot.com",
    messagingSenderId: "270276451719",
    appId: "1:270276451719:web:d596056c3451b8116d4722",
    measurementId: "G-5T07101SEL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);