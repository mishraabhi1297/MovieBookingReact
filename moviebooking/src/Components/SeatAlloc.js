import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

class SeatAlloc extends Component {
		
	render(){
		return (
			<div className="row">
				<h3>Choose {this.props.totalQuantity} seats for {this.props.currentMovie.title}</h3>
			</div>
		);
	}
}

export default SeatAlloc;