import * as firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyBWFTF0jaSoPhhhN2tBsufWpreBd_t9smw",
    authDomain: "c73-p-92a07.firebaseapp.com",
    projectId: "c73-p-92a07",
    storageBucket: "c73-p-92a07.appspot.com",
    messagingSenderId: "492280077013",
    appId: "1:492280077013:web:996c665dfeb8083dc6605c"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
  