import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class WeatherList extends Component {
  render() {
    return (
      <div>
      	<table className="table table-striped">
		  <thead>
		    <tr>
		      <th>City</th>
		      <th>Temperature</th>
		      <th>Humidity</th>
		    </tr>
		  </thead>
		  <tbody>
		    <tr>
		      <td>Mark</td>
		      <td>Otto</td>
		      <td>@mdo</td>
		    </tr>
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