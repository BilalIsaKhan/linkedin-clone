import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB6IknNE05pt-GPOHrBJ85-Hdge_AYbiMU",
    authDomain: "linkedin-clone-1689f.firebaseapp.com",
    projectId: "linkedin-clone-1689f",
    storageBucket: "linkedin-clone-1689f.appspot.com",
    messagingSenderId: "104925143511",
    appId: "1:104925143511:web:5be53bfce19540422dab92"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };