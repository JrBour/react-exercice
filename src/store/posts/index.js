import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: []
}

const posts = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost(state, { payload }) {
      state.list = [...state.list, payload]
    },
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
    addPost,
    addPosts,
    removePost
} = posts.actions;


// Redux-thunk
export const createPost = article => async dispatch => {
  try {
    const response = await fetch("http://localhost:3004/posts", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(article)
    })
    const data = await response.json();
    dispatch(addPost(data))
  } catch(e) {
    console.error(e);
  }
}

export const retrievePosts = () => async dispatch => {
  try {
    const response = await fetch("http://localhost:3004/articles", {
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
    await fetch(`http://localhost:3004/articles/${id}`, {
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