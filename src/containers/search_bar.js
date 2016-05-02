import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWeather } from '../actions/index';

class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state = {country : ''};
	}
	onChangeInputHandler(e){
		this.setState({country : e.target.value});

	}
	onFormSubmit(e){
		e.preventDefault();
		this.props.getWeather(this.state.country);
		this.setState({ country : ''});

	}
	render(){
		return (
			<form onSubmit ={this.onFormSubmit.bind(this)} className="form-inline">
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

function mapDispathToProps(dispatch){
	return bindActionCreators({ getWeather }, dispatch);
}

export default connect (null, mapDispathToProps)(SearchBar);