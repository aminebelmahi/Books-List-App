import firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCkQSRnq296ypZxaqPZeJ8SUmwiwoIJEF0",
  authDomain: "book-list-fb40d.firebaseapp.com",
  databaseURL: "https://book-list-fb40d.firebaseio.com",
  projectId: "book-list-fb40d",
  storageBucket: "book-list-fb40d.appspot.com",
  messagingSenderId: "895557364840",
  appId: "1:895557364840:web:17edc2e696ffce4b741fdd",
  measurementId: "G-JRL2F1G8CH",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Export firestore database
export default firebaseApp.firestore();
