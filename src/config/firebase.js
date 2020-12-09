import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

var config = {
  apiKey: "apiKey",
  authDomain: "authDomain",
  databaseURL: "databaseURL",
  projectId: "projectId",
  storageBucket: "storageBucket",
  messagingSenderId: "messagingSenderId",
  appId: "appId"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
