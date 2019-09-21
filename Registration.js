
import React, { Component } from 'react';

var firebase=require('firebase');
require('firebase/firestore');

     var config = {
    apiKey: "AIzaSyDmKxOROXkhUvElSk5N7jS0C4pkAWQ14UA",
    authDomain: "diakonnos.firebaseapp.com",
    projectId: "diakonnos",
  };
  firebase.initializeApp(config);
  var db = firebase.firestore( );
  
  
class Registration extends Component {
  constructor(props){
    super(props);
      this.state={}
    }
     change = e => {
     this.setState({
       [e.target.name]: e.target.value
     })
   }

   submit =() => {
     // alert(this.state.username, this.state.phone)
   const obj={ name:this.state.username,
                mobile:this.state.phone
          }
      db.settings({
           timestampsInSnapshots: true
              });


      db.collection("users").add(obj)

      .then(res=>alert('done'));
   
 
  }
  
  render(){
    return(
        <div id='root'>
        <div className="container" >
        <p>Hello friends </p>
        <input type="text" name="username" value={this.state.username||''} className="w3-input" onChange={this.change}/><br/>
        <input type="text" name="phone" value={this.state.phone||''} maxLength="10" className="w3-input" onChange={this.change}/><br/>
         <button className="btn btn-primary" onClick={this.submit} >Submit</button>
         </div>
         </div>
         );
       }
     }
     export default Registration;