import { combineReducers } from 'redux'
import {
  ADD_COUNTER,
  SUBTRACT_COUNTER,
} from '../actions'




function Counter(state = 0, action) {
  switch (action.type) {
    case ADD_COUNTER:
      return state+1;
    case SUBTRACT_COUNTER:
      return  state-1;
    default:
      return state
  }
}

const rootReducer = combineReducers({
    Counter
})

export default rootReducer