import React, { Component } from 'react';


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
  

class Auth extends Component {

	google(){
	
		var provider = new firebase.auth.GoogleAuthProvider();
		var promise = firebase.auth().signInWithPopup(provider);
        promise.then(result =>{
        	var user = result.user;
        	console.log(result);
        	firebase.database().ref('users/' +user.uid).set({
        		 email:user.email,
        		 name:user.displayName

        	});
        });

        promise.catch(e=>{
        	var msg = e.message;
        	console.log(msg);

        });
	}

	


    facebook(){
    	var provider = new firebase.auth.FacebookAuthProvider();
    	var promise = firebase.auth().signInWithPopup(provider);
    	promise.then(result =>{
    		var user = result.user;
    		console.log(result);
    		firebase.database().ref('user/'+user.uid).set({
    			email:user.email,
    			name:user.displayName
    		});
    	});
    
    	promise.catch(e=>{
    		var msg = e.message;
    		console.log(msg);
    	});
    	
    }

    constructor(props){
		super(props);
		this.state = {
			err:' '
		};
	
        this.facebook=this.facebook.bind(this);
        this.google=this.google.bind(this);
    }
    firebase.auth().onAuthStateChanged(function(user){
      window.user=user;
    });
    
  render() {
    return (
      <div id='root'>

      <button onClick={this.google} id="google" className=""> sign In with google </button> <br/>
      <button onClick={this.facebook} id="facebook" className=""> sign in with facebook</button>

      </div>
          );
         }
       }

export default Auth;