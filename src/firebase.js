import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDzoLXJijw0nkbPTRNKKvcQoDMYimxiHi4",
  authDomain: "frontend-udayy.firebaseapp.com",
  databaseURL: "https://frontend-udayy.firebaseio.com",
  projectId: "frontend-udayy",
  storageBucket: "frontend-udayy.appspot.com",
  messagingSenderId: "167280832020",
  appId: "1:167280832020:web:8f78503244516579ed8101",
  measurementId: "G-XTP27CC9WK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//initilize database and auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
