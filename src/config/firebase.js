// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore/lite';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhSCmpCRheDhN9qwoGJuJw1Vwyv1PZDyI",
  authDomain: "tiktok---jornada-92005.firebaseapp.com",
  projectId: "tiktok---jornada-92005",
  storageBucket: "tiktok---jornada-92005.appspot.com",
  messagingSenderId: "564675430351",
  appId: "1:564675430351:web:c7ce04d5cc6dd4b263f4ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

