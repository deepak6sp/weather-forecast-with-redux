import React, { Component } from "react";

class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state = {country : ''};
	}
	onChangeInputHandler(e){
		console.log(e.target.value);

		this.setState({country : e.target.value});

	}
	onFormSubmit(e){
		e.preventDefault();

	}
	render(){
		return (
			<form onSubmit ={this.onFormSubmit} className="form-inline">
				  <div className="form-group">
				    <input 
				    	type="text" 
				    	className="form-control" 
				    	placeholder="get forecast" 
				    	value = {this.state.country}
				    	onChange = {this.onChangeInputHandler.bind(this)}/>
				  </div>
				  <button type="submit" className="btn btn-secondary">Sumit</button>
			</form>
		);
	}
}


export default  SearchBar;