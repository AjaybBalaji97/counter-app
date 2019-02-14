/*
 * action types
 */

export const ADD_COUNTER = 'ADD_COUNTER'
export const SUBTRACT_COUNTER = 'SUBTRACT_COUNTER'



/*
 * action creators
 */

export function addCounter() {
  return { type: ADD_COUNTER }
}

export function subtractCounter() {
    return { type: SUBTRACT_COUNTER }
}
