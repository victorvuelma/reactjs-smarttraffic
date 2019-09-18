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

    this.io = socket('http://localhost:8000/')

    this.io.emit('connectTraffic', this.props.slug)

    this.io.on('change_state', data => {
      this.setState({ state: data })
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
          <span onClick={this.handleClose} className={state === 'CLOSED' ? 'red active' : 'red'} />
          <span
            className={state === 'OPENING' || state === 'CLOSING' ? 'yellow active' : 'yellow'}
          />
          <span onClick={this.handleOpen} className={state === 'OPEN' ? 'green active' : 'green'} />
        </div>
      </div>
    )
  }
}
