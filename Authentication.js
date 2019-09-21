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

class Authentication extends Component {
	constructor(){  
		super();
		this.state={ };
		this.handleClick=this.handleClick.bind(this);
		
	   }


  change = e =>{
  	this.setState({contact : e.target.value})
  	this.setState({verify: e.target.value})
  }	

 handleClick(e) {
 	window.recaptchaVerifier=new firebase.auth.RecaptchaVerifier('recaptcha-container');
    var phoneNumber = '+91'+this.state.contact;
    // var appVerifier= true;
     firebase.auth().signInWithPhoneNumber(phoneNumber,window.recaptchaVerifier)
     .then(res=>{
     	this.setState({confirmationResult:res})
       console.log('result',res)
     }).catch(err=>{console.log('error',err)})
     ;
    
     
 
     //grecaptcha.reset(window.recaptchaWidgetId);

   // Or, if you haven't stored the widget ID:
  //window.recaptchaVerifier.render().then(function(widgetId) {
 // grecaptcha.reset(widgetId);
//}

   }

   verify = () =>{
         	this.state.confirmationResult.confirm(this.state.verify).then(function (result) {
          // User signed in successfully.
          var user = result.user;
          console.log('success',user)
          // ...
        }).catch(function (error) {
          // User couldn't sign in (bad verification code?)
          console.log('failed',error)
          // ...
        });
   }
  


	render(){
		return(
			<div id='root'>
              <div style={{padding:20}} >
              

             { this.state.confirmationResult?
             	 <div>
             	 <p>Verify</p>
                     <input type="text" placeholder="code" className="" onChange={this.change} value ={this.state.verify} maxLength="10" /><br/>
               <br/>
               <button onClick={this.verify}>verify</button>
               <br/>
                   </div>        

                        :
                   <div>
                     <input type="text" className="w3-input" onChange={this.change} value ={this.state.contact} maxLength="10" /><br/>
               <br/>
               <button onClick={this.handleClick}>Sign In With phoneNumber</button>
               <br/>
                   </div>
                              } 
              </div>
              <div id='recaptcha-container'></div>
              </div>


			);
	}
}
export default Authentication;