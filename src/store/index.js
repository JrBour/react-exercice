import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import articles from './articles/index.js';

const reducer = combineReducers({
    articles,
})

const store = configureStore({ reducer, devTools: true });

export default store;
