import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBzcT2RrRpEn6Fr-gGWcmDkfAAra5tqpC0",
    authDomain: "float-ee7a2.firebaseapp.com",
    projectId: "float-ee7a2",
    storageBucket: "float-ee7a2.appspot.com",
    messagingSenderId: "729421103415",
    appId: "1:729421103415:web:070124f776454822dc9ab2",
    measurementId: "G-43MK073Q3W"
  });
 
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export { db, auth, storage, firebaseApp };