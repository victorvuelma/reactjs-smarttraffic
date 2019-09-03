import React, { Component } from 'react'

import socket from 'socket.io-client'

import './style.css'

export default class TrafficLight extends Component {
  state = {
    name: '',
    slug: '',
    state: 'NONE'
  }

  componentDidMount() {
    this.setState({
      name: this.props.name,
      slug: this.props.slug
    })

    const io = socket('https://vv-smarttraffic.herokuapp.com/:8080')

    io.emit('connectTraffic', this.props.slug)

    io.on('change_state', data => {
      this.setState({state : data})
    })
  }

  render() {
    const { state } = this.state

    return (
      <div id="trafficlight">
        <p>{this.state.name}</p>

        <div className="lights">
          <span className={state === 'CLOSED' ? 'red active' : 'red'} />
          <span className={(state === 'OPENING' || state === 'CLOSING') ? 'yellow active' : 'yellow'} />
          <span className={state === 'OPEN' ? 'green active' : 'green'} />
        </div>
      </div>
    )
  }
}
