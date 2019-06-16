import React, { Component } from 'react';
import axios from 'axios';
import { FormControl } from 'react-bootstrap';

class Session extends Component {

  constructor(props){
    super(props);

    this.state = {
      session_times: [],
    };
  }

	componentDidMount(){
    axios.get('/getSession')
    .then(res => {
      console.log(res);
      this.setState({ session_times: res.data });
      console.log(this.state.session_times);
    })
    .catch((error) => {
      console.log(error);
		});
  }
		
	render(){
		return (
			<div className="row">
        <h3>Please select a session for {this.props.currentMovie.title}</h3>
        <FormControl as="select" value={this.props.session} onChange={this.props.handleChange}>
          {this.state.session_times.map((item) => <option key={item.SESSIDX} value={item.SESSIDX}>{item.SESS_TIME}</option>)}
        </FormControl>
        <br/><br/><p>You have selected session {this.props.session}</p>
			</div>
    );
	}
}

export default Session;