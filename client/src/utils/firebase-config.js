
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBo3mZ-xaHC4RKbt7qS9N4In-5h8Zwp1YY",
  authDomain: "react-netflix-clone-6ea5c.firebaseapp.com",
  projectId: "react-netflix-clone-6ea5c",
  storageBucket: "react-netflix-clone-6ea5c.appspot.com",
  messagingSenderId: "548403336323",
  appId: "1:548403336323:web:a4cea0f8f7a5806dc537b6",
  measurementId: "G-044D4MHK26"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);