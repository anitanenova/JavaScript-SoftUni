import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDy3Lbr3f0cJaHJexj996hMfx8FPELzINg",
  authDomain: "origami-workshop.firebaseapp.com",
  projectId: "origami-workshop",
  storageBucket: "origami-workshop.appspot.com",
  messagingSenderId: "546898902558",
  appId: "1:546898902558:web:ea3df0f5e5b4df0dfdb80f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
