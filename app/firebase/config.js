import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiCI3AChsQtMNsZSZW1BwopEVxoXAiBak",
  authDomain: "to-do-list-cb3d0.firebaseapp.com",
  projectId: "to-do-list-cb3d0",
  storageBucket: "to-do-list-cb3d0.appspot.com",
  messagingSenderId: "893954119703",
  appId: "1:893954119703:web:77f49df80c909485f2a452",
  measurementId: "G-2679N0WCVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app)

export {app, auth}