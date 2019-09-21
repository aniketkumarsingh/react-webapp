import React, { Component } from 'react';
import './Abc.css';


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
    
     firebase.auth().signInWithPhoneNumber(phoneNumber,window.recaptchaVerifier)
     .then(res=>{
     	this.setState({confirmationResult:res})
       console.log('result',res)
     }).catch(err=>{console.log('error',err)})
     ;
    
     
 
    

   }

   verify = () =>{
         	this.state.confirmationResult.confirm(this.state.verify).then(function (result) {
          
          var user = result.user;
          console.log('success',user)
      
        }).catch(function (error) {
        
          console.log('failed',error)
        
        });
   }
  


	render(){
		return(
			<div id='root'>
      <div className="abc">
      investKeen
      </div>
               <div className="submit">
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
               <button onClick={this.handleClick}>Submit</button>
               <br/>
                   </div>
                              } 
              </div>
              <div id='recaptcha-container'></div>
              </div>
              </div>


			);
	}
}
export default Authentication;
        
