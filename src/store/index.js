import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import articles from './articles';
import posts from './posts';
import users from './users';

const reducer = combineReducers({
    articles,
    posts,
    users
})

const store = configureStore({ reducer, devTools: true, middleware: [thunk] });

export default store;
