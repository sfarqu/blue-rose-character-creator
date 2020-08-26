import { createStore, combineReducers } from 'redux'
import character from './character'
import { loadState, saveState } from './localstorage'


function attributes(state = [], action) {
  switch (action.type) {
    case 'UPDATE':
      return state.map((attribute, index) => {
        return index === action.index ? Object.assign({}, attribute, action.attribute) : attribute
      })
    default:
      return state
  }
}

function armor(state = {}, action) {
  switch (action.type) {
    case 'UPDATE':
      return Object.assign({}, state, action.armor)
    default:
      return state
  }
}

function shield(state = {}, action) {
  switch (action.type) {
    case 'UPDATE':
      return Object.assign({}, state, action.shield)
    default:
      return state
  }
}

function health(state = {}, action) {
  switch (action.type) {
    case 'UPDATE':
      return Object.assign({}, state, action.health)
    default:
      return state
  }
}

function characterClass(state = 'human', action) {
  switch (action.type) {
    default:
      return state
  }
}

function focuses(state = [], action) {
  switch (action.type) {
    case 'ADD_FOCUS':
      return state.find((focus) => focus === action.focus) ? state : state.concat(action.focus)
    case 'REMOVE_FOCUS':
      return state.filter((focus) => focus !== action.focus)
    default:
      return state
  }
}

function raceBonuses(state = {}, action) {
  switch (action.type) {
    case 'UPDATE':
      return Object.assign({}, state, action.raceBonuses)
    case 'CHANGE_RACE':
      return Object.assign({}, action.raceBonuses)
    default:
      return state
  }
}

function background(state = {name: null}, action) {
  switch (action.type) {
    case 'CHANGE_BACKGROUND':
      return Object.assign({}, action.background)
    default:
      return state
  }
}

const persistedState = loadState();

const reducer = combineReducers({ attributes, armor, shield, health, characterClass, focuses, raceBonuses, background })
const store = createStore(reducer, persistedState ? persistedState : character
  , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

store.subscribe(() => saveState(store.getState()))

export default store