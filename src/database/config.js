import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyB8nPH2xIRs9k5K8t199V8M1OiFPTYaoWk",
    authDomain: "a-music-me.firebaseapp.com",
    projectId: "a-music-me",
    storageBucket: "a-music-me.appspot.com",
    messagingSenderId: "252858302691",
    appId: "1:252858302691:web:e475a1203014f51b1605d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db= getDatabase(app);

export {db};