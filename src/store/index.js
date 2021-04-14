import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import articles from './articles/index.js';
import posts from './posts/index.js';

const reducer = combineReducers({
    articles,
    posts
})

const store = configureStore({ reducer, devTools: true, middleware: [thunk] });

export default store;
