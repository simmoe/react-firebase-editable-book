import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDJoq1UAwuJA_2dDxdaYQfXax1QF6IJ08A",
    authDomain: "react-firestore-intro.firebaseapp.com",
    databaseURL: "https://react-firestore-intro.firebaseio.com",
    projectId: "react-firestore-intro",
    storageBucket: "react-firestore-intro.appspot.com",
    messagingSenderId: "348264955234",
    appId: "1:348264955234:web:4e8535970c3957c24a803b",
    measurementId: "G-HNS1H90BW8"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase
