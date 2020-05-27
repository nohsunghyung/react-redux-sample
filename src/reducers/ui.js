import * as types from '../actions/ActionType';

const initialState = {
  color: [255,255,255]
}

export default function ui(state = initialState, action){
  switch(action.type) {
    case types.SET_COLOR: 
      return {
        ...state,
        color: action.color
      }
    default: 
      return state;
  }
}