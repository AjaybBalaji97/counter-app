import rootReducer from './';
import {
  ADD_COUNTER, 
  SUBTRACT_COUNTER
} from '../actions';
describe('INITIAL_STATE', () => {
    it('is correct', () => {
      const action = { type: 'dummy_action' };
      const initialState = { Counter: 0 };
  
      expect(rootReducer(undefined, action)).toEqual(initialState);
    });
});
describe('ADD_COUNTER', () => {
    it('should increment the "Counter" by 1', () => {
      const action = { type: 'ADD_COUNTER' };
      const currentState = { Counter: 0 };
  
      expect(rootReducer(currentState, action)).toEqual({ Counter: 1 });
    });
});
describe('SUBTRACT_COUNTER', () => {
    it('should decrement the "Counter" by 1', () => {
      const action = { type: 'SUBTRACT_COUNTER' };
      const currentState = { Counter: 1 };
  
      expect(rootReducer(currentState, action)).toEqual({ Counter: 0 });
    });
    it('should return currentState it the type of action in undefined',()=>{
      const action = { type: 'SUB_COUNTER' };
      const currentState = { Counter: 1 };
  
      expect(rootReducer(currentState, action)).toEqual({ Counter: 1 });
    })
});