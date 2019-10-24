import React, { Component } from 'react'

import socket from 'socket.io-client'

import './style.css'

export default class TrafficLight extends Component {
  state = {
    name: '',
    slug: '',
    state: 'NONE',
  }

  componentDidMount() {
    this.setState({
      name: this.props.name,
      slug: this.props.slug,
    })

    this.io = socket('https://node-smarttraffic.herokuapp.com/')

    this.io.emit('connectTraffic', this.props.slug)

    this.io.on('change_state', payload => {
      this.setState({
		  state: payload.state
	   })
    })
  }

  handleClose = () => {
    this.io.emit('alterState', {
      slug: this.props.slug,
      state: 'close',
    })
  }

  handleOpen = () => {
    this.io.emit('alterState', {
      slug: this.props.slug,
      state: 'open',
    })
  }

  render() {
    const { state } = this.state

    return (
      <div id="trafficlight">
        <p>{this.state.name}</p>

        <div className="lights">
          <span onClick={this.handleClose} className={state === 'OPENING' || state === 'CLOSED' ? 'red active' : 'red'} />
          <span
            className={state === 'CLOSING' ? 'yellow active' : 'yellow'}
          />
          <span onClick={this.handleOpen} className={state === 'OPEN' ? 'green active' : 'green'} />
        </div>
      </div>
    )
  }
}
