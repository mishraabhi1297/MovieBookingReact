import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

class Quantity extends Component {
		
	render(){
		return (
			<div className="row">
        <h3>Please choose quantity for {this.props.currentMovie.title}</h3>

				<div className="row">{this.props.ticketTypes.map((item) =>
				  <div key={item.id}>
						<div className="col-md-2">
							<h4>{item.title}</h4>
						</div>
						<div className="col-md-8">
							<div className="row">
								<div className="col-md-2">
									<button className="btn btn-danger" onClick={() => this.props.updateTicket(item.id, false)}>
										<span className="glyphicon glyphicon-minus"></span>
									</button>
								</div>
								<div className="col-md-8">
									<FormControl type="text" disabled="disabled" value={item.quantity}></FormControl>
								</div>
								<div className="col-md-2">
									<button className="btn btn-success" onClick={() => this.props.updateTicket(item.id, true)}>
										<span className="glyphicon glyphicon-plus"></span>
									</button>
								</div>
							</div>
						</div>
						<div className="col-md-2">
							<h4>${item.price}</h4>
						</div>
					</div>
				)}</div>

        <div className="row">
					<div className="col-md-8">
					</div>
					<div className="col-md-4">
						<h3>Total Price: ${this.props.totalPrice}</h3>
					</div>
				</div>
			</div>
    );
	}
}

export default Quantity;