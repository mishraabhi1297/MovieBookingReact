import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import CloseImage from '../Images/close.png';

import MovieDesc from './MovieDesc';
import Session from './Session';
import Quantity from './Quantity';

class Popup extends Component {
	constructor(props){
		super(props);

		this.state = {
			stepNum: 0,

			//Session
			session: 1,

			//Quantity
			ticketTypes: [
				{id: 1, title: 'Adult', price: 18, quantity: 0},
				{id: 2, title: 'Child', price: 12, quantity: 0},
				{id: 3, title: 'Concession', price: 10, quantity: 0},
				{id: 4, title: 'Senior', price: 10, quantity: 0}
			],
			totalQuantity: 0,
			totalPrice: 0,
			increment: false
		};
	}

	displayContent(BaseImageUrl, currentMovie){
		switch(this.state.stepNum){
			case 0:
				return(
					<MovieDesc 
						BaseImageUrl={BaseImageUrl}
						currentMovie={currentMovie} />
				);
			case 1:
					return(
						<Session 
							session={this.state.session}
							currentMovie={currentMovie}
							handleChange={this.updateSession.bind(this)} />
					);
			case 2:
				return(
					<Quantity 
						totalQuantity={this.state.totalQuantity}
						totalPrice={this.state.totalPrice}
						ticketTypes={this.state.ticketTypes}
						currentMovie={currentMovie}
						updateTicket={this.updateTicket.bind(this)} />
				);
			case 3:
				return(
					<div>
						<h2>Seat Booking</h2>
					</div>
				);
			case 4:
				return(
					<div>
						<h2>Payment</h2>
					</div>
				);
			case 5:
				return(
					<div>
						<h2>Booking Confirmation</h2>
					</div>
				);
			default:
				break;
		}
	}

	stepIncrement(int){
		if(int < 4){
			this.setState({ stepNum: int+1 });
		}
	}

	stepDecrement(int){
		if(int > 0){
			this.setState({ stepNum: int-1 });
		}
	}

	updateSession(event){
		this.setState({ session: event.target.value });
	}

	updateTicket(id, increment){
		let newTicketTypes = this.state.ticketTypes;
		let newTotalQuantity = this.state.totalQuantity;
		let newTotalPrice = this.state.totalPrice;

		if(increment){
			newTicketTypes[id-1].quantity++;
			newTotalQuantity++;
			newTotalPrice += newTicketTypes[id-1].price;
		}

		if(!increment && newTicketTypes[id-1].quantity > 0){
			newTicketTypes[id-1].quantity--;
			newTotalQuantity--;
			newTotalPrice -= newTicketTypes[id-1].price;
		}

		this.setState({ ticketTypes: newTicketTypes, totalQuantity: newTotalQuantity, totalPrice: newTotalPrice });
	}

	render(){
		return(
			<div className="popup">
				<div className="popup_upper">
					<img className="close" src={CloseImage} alt="close" height={20} width={20} onClick={this.props.closePopup} />
					<div className="progressBar">
						<div className="filler" style={{ width: `${((this.state.stepNum)*100)/5}%` }}></div>
					</div>
				</div>
        <div className="popup_inner">
					{this.displayContent(this.props.BaseImageUrl, this.props.currentMovie)}
        </div>
				<div className="popup_under">
					{this.state.stepNum === 0 ? null : <Button 
																							className="btn-info" 
																							onClick={this.stepDecrement.bind(this, this.state.stepNum)}>Previous
																							</Button>}
					<span>  </span>
					<Button className="btn-success" onClick={this.stepIncrement.bind(this, this.state.stepNum)}>
						{this.state.stepNum === 4 ? "Finish" : "Next"}
					</Button>
				</div>
			</div>
		);
	}
}

export default Popup;