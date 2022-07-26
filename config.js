import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAHunWtqOJ3n-4WctjKXmiwes-NEuwo7Uk",
    authDomain: "project-71-d0f9e.firebaseapp.com",
    projectId: "project-71-d0f9e",
    storageBucket: "project-71-d0f9e.appspot.com",
    messagingSenderId: "58838027258",
    appId: "1:58838027258:web:2e0190f20a5f6204d3b243"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
