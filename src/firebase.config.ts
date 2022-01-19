import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyARKsXy9nIGXRq89oImvDfGB9MqAhSV-RA",
  authDomain: "falco-btp.firebaseapp.com",
  projectId: "falco-btp",
  storageBucket: "falco-btp.appspot.com",
  messagingSenderId: "1042243813459",
  appId: "1:1042243813459:web:9596223cb6409ebe2106a6",
  measurementId: "G-W31PQGT7VS"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore()

export default db