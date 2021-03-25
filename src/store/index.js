import { combineReducers, createStore, compose } from 'redux';
import articles from './articles/reducers';

const reducers = combineReducers({
    articles,
})


const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(reducers, enhancers);

export default store;
