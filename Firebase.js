// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
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
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const database = getDatabase(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { firestore, auth, storage, database, getAuth };
