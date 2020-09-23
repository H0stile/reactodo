import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCJTHnjPgKnunhVRJL_N3aPSu8iCUcoFqQ",
  authDomain: "reactodo-71ffa.firebaseapp.com",
  databaseURL: "https://reactodo-71ffa.firebaseio.com",
  projectId: "reactodo-71ffa",
  storageBucket: "reactodo-71ffa.appspot.com",
  messagingSenderId: "645651561671",
  appId: "1:645651561671:web:7706ca23197f5be803d2e2",
  measurementId: "G-L70SSEFG86",
});

const db = firebaseApp.firestore();
export default db;
