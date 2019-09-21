import React , {Component} from 'react';
import fire from './fire';


import Uploadimg from './Admin/Uploadimg';


export default class Addproduct extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {show:true};
	}
	submit=() => {
		 this.setState({show:false})
		 
		 setTimeout(()=>{this.setState({show:true})},100)

	}
	render() {
		return (
			<div>
			{this.state.show ? <Newproduct  submit={this.submit} /> : ''  }
			</div>
			
		);
	}
}

class Newproduct extends Component{
	
	
	geturl = (url) =>{
	this.setState({
				img:url

			
		});
		}
	submit = e =>{
		e.preventDefault()
		var db= fire.firestore();
		
  const settings = {timestampsInSnapshots: true};
  
		db.collection('newproducts').add(this.state)
		.then(res =>{
			console.log(res.id)
			
			this.props.submit()
		})
		.catch(err =>{
			console.log('something went wrong',err)
		})
	}
	takedata = e =>{
		this.setState({
			[e.target.name]: e.target.value 
		});
	}
	
	constructor(props){
		super(props);
		this.state ={
			name:'',
			category:'',
			productdetail:'',
			
		}
	}
	
	render() {
	
		      
		return (
			<div className="container w3-padding">
			
			<div className="row w3-padding">
			<div className="col-md-6 w3-padding">
                     <h3 className="w3-tag w3-padding w3-center">Add New</h3>
		        <form className="w3-container" onSubmit={this.submit}>

                       <label className="w3-text-blue"><b>Name</b></label>
                  <input className="w3-input w3-border" type="text" name="name" value={this.state.name} onChange={this.takedata} required/>
                      <br/>
                      <label className="w3-text-blue"><b>Category</b></label>
                      <input className="w3-input w3-border" type="text" name="category" value={this.state.category} onChange={this.takedata} required/>
					  <br/>
                      <label className="w3-text-blue"><b>productdetail</b></label>
                      <textarea className="materialize-textarea" type="text" name="productdetail" value={this.state.productdetail} onChange={this.takedata} required/>
                    <br/>
					<input type="checkbox" name="size" checked={this.state.checked} onChange={this.handleCheckClick} className="filled-in" id="filled-in-box"/>
					<div>Is checked? {String(this.state.checked)}</div>
                     <br/>
                     <Uploadimg geturl={this.geturl} onChange={this.takedata} />

                     <br/>
                      <button className="w3-btn w3-blue">Add</button>
 
                   </form>
		    </div>
			</div>
			</div>
		);
		
		  }
		  handleCheckClick = e => {
			
			this.setState({ XC: !this.state.checked });
		}
		
}


