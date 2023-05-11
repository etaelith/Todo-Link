// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

/* 
const admin = require("firebase-admin") */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* try {

    admin.initializeApp({
        credential: admin.credential.cert(FIREBASE_KEYS),
    })

} catch (e) { console.log(e) }

export const firestore = admin.firestore() */

const firebaseConfig = {
    apiKey: "AIzaSyCQ3R_4UZQcy9AryjcjKusuuI80WZpcJ_E",
    authDomain: "todo-link-f6b2d.firebaseapp.com",
    projectId: "todo-link-f6b2d",
    storageBucket: "todo-link-f6b2d.appspot.com",
    messagingSenderId: "77147018685",
    appId: "1:77147018685:web:2bc3173089a45d0765eed4"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
