import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';

 


const firebaseConfig = {
    apiKey: "AIzaSyCSpqYy0TTIy6GssNCxoHfimv94l4k_AgQ",
    authDomain: "mancity-db.firebaseapp.com",
    databaseURL: "https://mancity-db.firebaseio.com",
    projectId: "mancity-db",
    storageBucket: "mancity-db.appspot.com",
    messagingSenderId: "952656409046",
    appId: "1:952656409046:web:0f300f90fa2bd3b7b83477",
    measurementId: "G-BP8YV9VXYT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const firebaseDB = firebase.database();

  const firebaseMatches = firebaseDB.ref('matches');

  export {
    firebase,
    firebaseMatches
  }
