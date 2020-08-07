import { createStore, combineReducers } from 'redux'
import character from './character'
import { loadState, saveState } from './localstorage'


function attributes(state = [], action) {
  switch (action.type) {
    case 'UPDATE':
      return state.map((attribute, index) => {
        return index === action.index ? Object.assign(attribute, action.attribute) : attribute
      })
    default:
      return state
  }
}

const persistedState = loadState();

const reducer = combineReducers({ attributes })
const store = createStore(reducer, persistedState ? persistedState : character)

store.subscribe(() => saveState(store.getState()))

export default store