import React, { Component } from 'react';

class MovieDesc extends Component {
	render(){
		return (
			<div className="row">
				<div className="col-md-4">
					<img src={this.props.BaseImageUrl + this.props.currentMovie.poster_path} alt={this.props.currentMovie.original_title} 
						width={280} height={410} />
				</div>
				<div className="col-md-8">
					<h2>{this.props.currentMovie.title}</h2>
					<p>{this.props.currentMovie.overview}</p>
					<p><strong>Release Date:</strong> {this.props.currentMovie.release_date}</p>
				</div>
			</div>
    	);
	}
}

export default MovieDesc;