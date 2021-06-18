import firebase from 'firebase/app'
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyA9rrT4kiwqb4upZhj4E1J6De7vaIwV1_g",
    authDomain: "projectwhiteboard-f93ac.firebaseapp.com",
    projectId: "projectwhiteboard-f93ac",
    storageBucket: "projectwhiteboard-f93ac.appspot.com",
    messagingSenderId: "46069576423",
    appId: "1:46069576423:web:652e8b2e0176c48f8ca842",
    measurementId: "G-EYEEQ4B38E"
  };
 export const app= firebase.initializeApp(firebaseConfig);