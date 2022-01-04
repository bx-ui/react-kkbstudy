import { createStore } from 'redux'

const reducer = (state = 0, { type, payload = 1 }) => {
  if (type === 'ADD') {
    return state += payload
  } else if (type === 'MINUS') {
    return state -= payload
  } else {
    return state
  }
}

const store = createStore(reducer)

export default store