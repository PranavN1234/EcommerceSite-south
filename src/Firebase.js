// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAloRcalb7e5yYBOwVXDQRFsmsAIKAs7yg",
  authDomain: "ecom-clone-7a138.firebaseapp.com",
  projectId: "ecom-clone-7a138",
  storageBucket: "ecom-clone-7a138.appspot.com",
  messagingSenderId: "503687808335",
  appId: "1:503687808335:web:32a61f728282df8e14713a",
  measurementId: "G-YZ7P2XVHYP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
