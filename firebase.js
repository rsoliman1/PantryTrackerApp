// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBarnqU3-ONFjkymC77BUf9twX5Raw4asY",
  authDomain: "inventory-management-app-e0fdb.firebaseapp.com",
  projectId: "inventory-management-app-e0fdb",
  storageBucket: "inventory-management-app-e0fdb.appspot.com",
  messagingSenderId: "697968144026",
  appId: "1:697968144026:web:7140baae60a98a50c03923",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {app, firestore}