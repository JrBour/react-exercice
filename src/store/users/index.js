import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: null
}

const users = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addProfile(state, { payload }) {
      state.profile = payload
    },
    resetProfile(state) {
      state.profile = null
    },
  }
});

// Actions
export const {
    addProfile,
    resetProfile
} = users.actions;


// Redux-thunk
export const createUser = user => async dispatch => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    await response.json();
  } catch(e) {
    console.error(e);
  }
}

// Selectors
export const getCurrentUser = (state) => state.users.profile;

export default users.reducer;