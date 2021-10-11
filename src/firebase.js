import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBL2ftfEQbqSZyV1NM0mXF_iUlpqycRIdc",
  authDomain: "newsletter-ef411.firebaseapp.com",
  projectId: "newsletter-ef411",
  storageBucket: "newsletter-ef411.appspot.com",
  messagingSenderId: "811279226699",
  appId: "1:811279226699:web:42954c194234019a8f3ace",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
