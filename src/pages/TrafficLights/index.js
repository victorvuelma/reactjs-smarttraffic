import React, { Component } from 'react';

import TrafficLight from '../../components/TrafficLight';

import './style.css';

export default class TrafficLights extends Component {
  render() {
    return (
        <div id='trafficlights'>
            <h2>Semaforos</h2>

            <div className='content'>
              <TrafficLight name='Av. Paulista - A'/>
              <TrafficLight name='Av. Paulista - B'/>
              <TrafficLight name='Rua Bela Cintra'/>
            </div>
        </div>
    );
  }
}
