import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    // copy and paste your firebase credential here
    apiKey: "AIzaSyARJQ4SOtyNYPL07t7WVkAnTJd3LHgus4Y",
    authDomain: "quizz-cda-simplon.firebaseapp.com",
    databaseURL: "https://quizz-cda-simplon-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "quizz-cda-simplon",
    storageBucket: "quizz-cda-simplon.appspot.com",
    messagingSenderId: "1040920332824",
    appId: "1:1040920332824:web:12419a484f3cc44923516d"
});

const db = firebaseApp.firestore();

export { db };