import React, { Component } from 'react';
import axios from 'axios';
import { FormControl } from 'react-bootstrap';

class Session extends Component {

  constructor(){
    super();

    this.state = {
      session_times: [],
      value: 1
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
		})
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
		
	render(){
		return (
			<div className="row">
        <FormControl as="select" value={this.state.value} onChange={this.handleChange.bind(this)}>
          {this.state.session_times.map((item) => <FormControl as="option" value={item.SESSIDX}>{item.SESS_TIME}</FormControl>)}
        </FormControl>
        <br/><br/><p>You have selected session {this.state.value}</p>
			</div>
    );
	}
}

export default Session;