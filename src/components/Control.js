import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Control extends Component {
  render() {
    return (
      <div>
        <button type="button" onClick={this.props.onIncrement}>+</button>
        <button type="button" onClick={this.props.onDecrement}>-</button>
        <button type="button" onClick={this.props.onRandomizeColor}>random</button>
      </div>
    )
  }
}

Control.propTypes = {
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onRandomizeColor: PropTypes.func
}


export default Control
