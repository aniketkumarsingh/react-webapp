import * as firebase from 'firebase';
import firebaseui from 'firebaseui';
require("firebase/firestore");

  var config = {
    apiKey: "AIzaSyDmKxOROXkhUvElSk5N7jS0C4pkAWQ14UA",
    authDomain: "diakonnos.firebaseapp.com",
    databaseURL: "https://diakonnos.firebaseio.com",
    projectId: "diakonnos",
    storageBucket: "diakonnos.appspot.com",
    messagingSenderId: "712822194090"
  };
  var fire = firebase.initializeApp(config);
   var ui = new firebaseui.auth.AuthUI(firebase.auth())
   var db = fire.firestore()
   var 
  export default fire;
  export {ui,db}