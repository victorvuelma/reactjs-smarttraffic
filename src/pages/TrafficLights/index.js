import React, { Component } from 'react'

import TrafficLight from '../../components/TrafficLight'

import './style.css'

export default class TrafficLights extends Component {
  render() {
    return (
      <div id="trafficlights">
        <h2>Semaforos</h2>

        <div className="content">
          <TrafficLight name="Av. Paulista - A" slug="av_paulista_a" />
          <TrafficLight name="Av. Paulista - B" slug="av_paulista_b" />
          <TrafficLight name="Rua Bela Cintra" slug="rua_bela_cintra" />
        </div>
      </div>
    )
  }
}
