import * as types from './ActionType';

const increment = () => {
  return {
    type: types.INCREMENT
  }
}

const decrement = () => {
  return {
    type: types.DECREMENT
  }
}

const setColor = (color) => {
  return { 
    type: types.SET_COLOR,
    color
  }
}

export {
  increment,
  decrement,
  setColor
}