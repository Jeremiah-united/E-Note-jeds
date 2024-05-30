// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-lf7mHRPAiHlkFFO-CnNCjx3Lw2gIioQ",
  authDomain: "e-note-jeds.firebaseapp.com",
  projectId: "e-note-jeds",
  storageBucket: "e-note-jeds.appspot.com",
  messagingSenderId: "58660015127",
  appId: "1:58660015127:web:18ba59551e3e17ab17e052",
  databaseURL: "https://e-note-jeds-default-rtdb.firebaseio.com",
  measurementId: "G-7QEZV8RV4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { firestore, auth, storage, analytics, database };
