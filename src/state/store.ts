import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { ActionType } from './action-types'
import reducers from './reducers'

export const store = createStore(reducers, {}, applyMiddleware(thunk))

// const state = store.getState()
// state.cells.data

store.dispatch({
  type: ActionType.INSERT_CELL_BEFORE,
  payload: {
    id: null,
    type: 'code'
  }
})
store.dispatch({
  type: ActionType.INSERT_CELL_BEFORE,
  payload: {
    id: null,
    type: 'text'
  }
})
console.log(store.getState())
