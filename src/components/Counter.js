import React, { Component } from "react";
import Control from "./Control";
import Value from "./Value";
import { connect } from "react-redux";
import * as actions from "../actions";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
    };
  }
  setRandomColor = () => {
    const color = [
      Math.floor(Math.random() * 55 + 200),
      Math.floor(Math.random() * 55 + 200),
      Math.floor(Math.random() * 55 + 200),
    ];

    console.log(color);

    this.props.handleColor(color);
  };
  render() {
    const color = this.props.color;
    const style = {
      background: `rgba(${color[0]},${color[1]},${color[2]})`,
    };
    return (
      <div style={style}>
        fff
        <Value number={this.props.number} />
        <Control
          onIncrement={this.props.handleIncrement}
          onDecrement={this.props.handleDecrement}
          onRandomizeColor={this.setRandomColor}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    number: state.counter.number,
    color: state.ui.color,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrement: () => {
      dispatch(actions.increment());
    },
    handleDecrement: () => {
      dispatch(actions.decrement());
    },
    handleColor: (color) => {
      dispatch(actions.setColor(color));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
