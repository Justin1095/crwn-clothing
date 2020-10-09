import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB6j23DnYA44VokBuQN-U2KHRA3BnlovYs",
    authDomain: "crown-db-1996.firebaseapp.com",
    databaseURL: "https://crown-db-1996.firebaseio.com",
    projectId: "crown-db-1996",
    storageBucket: "crown-db-1996.appspot.com",
    messagingSenderId: "800148263939",
    appId: "1:800148263939:web:6b3beda1b4a1165ab3ea36",
    measurementId: "G-5FC0K5LGVK"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;