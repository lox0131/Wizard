import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore"

const clientCredentials = {
  apiKey: "AIzaSyCkepMLKZpaLZ5GQ4D4J6rZp3Knovb88LY",
  authDomain: "next-app-cdf27.firebaseapp.com",
  projectId: "next-app-cdf27",
  storageBucket: "next-app-cdf27.appspot.com",
  messagingSenderId: "95952365082",
  appId: "1:95952365082:web:6ed1026c25a4f0d6aa93a3",
};

if (!firebase.apps.length) {
    firebase.initializeApp(clientCredentials);
}

export default firebase;