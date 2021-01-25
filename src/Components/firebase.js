import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC16q5Cn4Bqp59OMcoEPgvVEq-_32qaDGE",
    authDomain: "test-database-60dc8.firebaseapp.com",
    databaseURL: "https://test-database-60dc8-default-rtdb.firebaseio.com",
    projectId: "test-database-60dc8",
    storageBucket: "test-database-60dc8.appspot.com",
    messagingSenderId: "48872324934",
    appId: "1:48872324934:web:55cd546f9fb955ba4b6f47",
    measurementId: "G-J6J24SLJZF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;