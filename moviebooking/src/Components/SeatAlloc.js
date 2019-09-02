import React, { Component } from 'react';

class SeatAlloc extends Component {
	
	constructor() {
		super();

		this.state = {
			seatsArray: []
		};
	}

	componentDidMount() {
		var localSeatArray = [];

		for(var i = 0; i < 8; i++) {
			localSeatArray[i] = [];
			for(var j = 65; j < 75; j++) {
				localSeatArray[i][j-65] = `${i+String.fromCharCode(j)}`;
			}
		}

		this.setState({ seatsArray: localSeatArray });
		console.log("Reaching this stage");
		console.log(this.state.seatsArray);
	}

	render(){
		return (
			<div className="row">
				<h3>Choose {this.props.totalQuantity} seats for {this.props.currentMovie.title}</h3>

				{}
			</div>
		);
	}
}

export default SeatAlloc;