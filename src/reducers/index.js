import { combineReducers } from 'redux' // reducer 함수들을 모아주는 api
import {counter} from './counter'
import ui from './ui'

const reducers = combineReducers({
  counter,
  ui
})

export default reducers;