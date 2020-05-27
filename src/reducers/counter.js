import * as types from '../actions/ActionType';

const initialState = {
  number: 0,
  // dumb: 'dumb',
  // dumbObj: {
  //   d: 0,
  //   u: 1,
  //   m: 2,
  //   b: 3
  // }
};

const counter = (state = initialState, action) => {
  switch(action.type) {
    case types.INCREMENT: 
      return {
        ...state,
        number: state.number + 1,
        // dumbObj: {
        //   ...state.dumbObj,
        //   u: 33
        // }
      }
    case types.DECREMENT: 
      return {
        ...state,
        number: state.number - 1,
      }
    default: 
      return state;
  }
}

export {
  counter,
}