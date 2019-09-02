
import React, { Component } from 'react';

import './style.css';

export default class TrafficLight extends Component {

  state = {
    name: ''
  }

  componentDidMount() {
    this.setState({ name: this.props.name })
  }

  render() {
    return (
      <div id='trafficlight'>
        <p>{this.state.name}</p>

        <div className='lights'>
          <span className='red active'></span>
          <span className='yellow'></span>
          <span className='green'></span>
        </div>
      </div>
    );
  }
}
