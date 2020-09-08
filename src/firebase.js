import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyDjRb_cvsYZ9Fg46PtCtztHeJMmkfWJTMI",
  authDomain: "clone-bbb80.firebaseapp.com",
  databaseURL: "https://clone-bbb80.firebaseio.com",
  projectId: "clone-bbb80",
  storageBucket: "clone-bbb80.appspot.com",
  messagingSenderId: "246315080054",
  appId: "1:246315080054:web:47b9fcfbde121db6854257",
  measurementId: "G-4YJL28MKLS",

})

//const db = firebaseApp.firestore();
const auth = firebase.auth();


export{ auth};


