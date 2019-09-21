import React, { component } from 'react';
var firebase=require('firebase');
 
   var config = {
    apiKey: "AIzaSyDmKxOROXkhUvElSk5N7jS0C4pkAWQ14UA",
    authDomain: "diakonnos.firebaseapp.com",
    databaseURL: "https://diakonnos.firebaseio.com",
    projectId: "diakonnos",
    storageBucket: "diakonnos.appspot.com",
    messagingSenderId: "712822194090"
  };
  firebase.initializeApp(config);


class Authentication extends Component {


var phoneNumber = "+917683002486";
var testVerificationCode = "123456";

// This will render a fake reCAPTCHA as appVerificationDisabledForTesting is true.
// This will resolve after rendering without app verification.
var appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
// signInWithPhoneNumber will call appVerifier.verify() which will resolve with a fake
// reCAPTCHA response.
firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function (confirmationResult) {
      // confirmationResult can resolve with the whitelisted testVerificationCode above.
      return confirmationResult.confirm(testVerificationCode).
    })
    .catch(function (error) {
      // Error; SMS not sent
      // ...
    });
	
	render(){
		return(
			<div id='root'>
            

			);
	}
}
export default Authentication;