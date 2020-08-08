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

function armor(state = {}, action) {
  switch (action.type) {
    case 'UPDATE':
      return Object.assign(state, action.armor)
    default:
      return state
  }
}

function shield(state = {}, action) {
  switch (action.type) {
    case 'UPDATE':
      return Object.assign(state, action.shield)
    default:
      return state
  }
}

function health(state = {}, action) {
  switch (action.type) {
    case 'UPDATE':
      return Object.assign(state, action.health)
    default:
      return state
  }
}

function characterClass(state = 'human', action) {
  switch (action.type) {
    case 'UPDATE':
      return action.class
    default:
      return state
  }
}

const persistedState = loadState();

const reducer = combineReducers({ attributes, armor, shield, health, characterClass })
const store = createStore(reducer, persistedState ? persistedState : character)

store.subscribe(() => saveState(store.getState()))

export default store