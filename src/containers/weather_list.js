import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class WeatherList extends Component {
  render() {
  	
   var new_table = this.props.weather.map(function (element,index){
   		return (
  		 	<tr>
  		 	  <td>{index}</td>
		      <td>{element.city.name}</td>
		      <td></td>
		      <td></td>
		    </tr>
		);
  	});
   console.log(this.props.weather);
    return (
      <div>
      	<table className="table table-striped">
		  <thead>
		    <tr>
		      <th>#</th>
		      <th>City</th>
		      <th>Temperature</th>
		      <th>Humidity</th>
		    </tr>
		  </thead>
		  <tbody>
		   	{new_table}
		  </tbody>
		</table>
      </div>
    );
  }
}

function mapStateToProps({weather}){ //weather = state.weather
	return { weather }; // weather  === weather  : weather
} 

export default connect (mapStateToProps)(WeatherList);