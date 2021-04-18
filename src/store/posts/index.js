import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: null
}

const posts = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPosts(state, { payload }) {
      state.list = payload
    },
    removePost(state, { payload }) {
      state.list = [...state.list.filter(item => item.id !== payload.id)]    
    },
  }
});

// Actions
const {
    addPosts,
    removePost
} = posts.actions;

export const retrievePosts = () => async dispatch => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}posts?_expand=user`, {
      method: 'GET',
    })
    const data = await response.json();
    dispatch(addPosts(data))
  } catch(e) {
    console.error(e);
  }
}

export const removePostById = id => async dispatch => {
   try {
    await fetch(`${process.env.REACT_APP_API_URL}posts/${id}`, {
      method: 'DELETE'
    })
    dispatch(removePost({ id }))
  } catch(e) {
    console.error(e);
  }
}


// Selectors
export const getPosts = (state) => state.posts.list;

export const getPost = (state, id) => state.posts.list.find(post => post.id === id);

export default posts.reducer;