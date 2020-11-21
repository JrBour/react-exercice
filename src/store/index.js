import { createStore, combineReducers } from 'redux'
import todos from './todos/reducer';

const reducers = combineReducers({
  todos
})

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;