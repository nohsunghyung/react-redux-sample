import React, { Component } from 'react'
import PropTypes from 'prop-types'

const propsType = {
  number: PropTypes.number
}

const defaultProps = {
  number: -1
}

export default class Value extends Component {
  render() {
    return (
      <div>
        <h1> {this.props.number} </h1>
      </div>
    )
  }
}

Value.propsType = propsType;
Value.defaultProps = defaultProps;
