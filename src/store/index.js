import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducers from '../reducers'

const middlewares = [applyMiddleware(...[thunk])]
const initialState = {}

if (window.__REDUX_DEVTOOLS_EXTENSION__) {
  middlewares.push(window.__REDUX_DEVTOOLS_EXTENSION__())
}

export default createStore(reducers, initialState, compose(...middlewares))
