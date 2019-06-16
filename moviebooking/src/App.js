import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Popup from './Components/Popup';

class App extends Component {
  constructor(){
    super();

    this.state = {
      moviePosters: [],
      data: [],
      showPopup: false,
      currentMovie: [],
      API: '6cede8b2b29249da8b1d8c2311f18209',
      BaseUrl: 'https://api.themoviedb.org/3/',
      BaseImageUrl: 'https://image.tmdb.org/t/p/w500/'
    };
  }

  componentDidMount(){
    //Get the movie information
    axios.get(`${this.state.BaseUrl}discover/movie?primary_release_date.gte=2019-05-15&primary_release_date.lte=2019-06-15&api_key=${this.state.API}`)
    .then(res => {
      console.log(res.data.results);
      this.setState({ data: res.data.results });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  myPopup(){
    return(
      <Popup 
        BaseImageUrl={this.state.BaseImageUrl}
        currentMovie={this.state.currentMovie}
        closePopup={this.togglePopup.bind(this)} /> 
    );
  }

  togglePopup(poster){
    console.log(poster);
    this.state.showPopup ? this.setState({ showPopup: false, currentMovie: null }) 
      : this.setState({ showPopup: true, currentMovie: poster });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h1>The Movie Booking App</h1>
        </div>

        <div className="row">
          {/* Setting up the posters in horizontal format */}
          <div className="poster">
            { this.state.data.map(poster =>
                <span key={poster.id}>
                  <img src={this.state.BaseImageUrl + poster.poster_path} alt={poster.original_title} 
                    width={100} height={150} onClick={this.togglePopup.bind(this, poster)} />
                </span>
              )}
          </div>
        </div>

        <div>
          {this.state.showPopup ? this.myPopup() : null}
        </div>
      </div>
    );
  }
}

export default App;
