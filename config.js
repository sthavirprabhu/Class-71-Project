import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyC4SrryLiAPT8tKjxoNrZs-lK_KtQ1tPAM",
    authDomain: "bikeapp-4cfd5.firebaseapp.com",
    projectId: "bikeapp-4cfd5",
    storageBucket: "bikeapp-4cfd5.appspot.com",
    messagingSenderId: "376618418920",
    appId: "1:376618418920:web:b4b8d0fa6c3017167fff5d"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
