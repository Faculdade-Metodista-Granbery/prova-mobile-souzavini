import firebase from 'firebase/app';
import 'firebase/firebase-database';


var firebaseConfig = {
    apiKey: "AIzaSyC89cal-KwzAqqgPEBiPoxdDLK9gNp2yyk",
    authDomain: "leandro-prova.firebaseapp.com",
    databaseURL: "https://leandro-prova-default-rtdb.firebaseio.com",
    projectId: "leandro-prova",
    storageBucket: "leandro-prova.appspot.com",
    messagingSenderId: "938108469533",
    appId: "1:938108469533:web:d6deb0a8589aac5ad521f4",
    measurementId: "G-4QY7PNHB4F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const createFirebase = () => {
    const db = firebase.database().ref();
       return db;
   }
   
   const createDatabaseService = (service) => {
       if (service === 'firebase') {
           return createFirebase();
       }
   }
   
   export default {
       createDatabaseService,
   }