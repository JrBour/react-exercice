import { createSlice } from '@reduxjs/toolkit';

  
const initialState = {
  list: []
}

const articles = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addArticle(state, { payload }) {
      state.list = [...state.list, payload]
    },
    removeArticle(state, { payload }) {
      state.list = [...state.list.filter(item => item.id !== payload.id)]    
    },
  }
});


// Actions
export const {
    addArticle,
    removeArticle
} = articles.actions;


// Selectors
export const getArticles = (state) => state.articles.list;

export const getArticle = (state, id) => state.articles.list.find(article => article.id === id);

const getArticleByIndex = (state, index) => state.articles.list[index];

export const getArticleIndex = (state, id) => state.articles.list.findIndex(article => article.id === id);

export const getNextArticle = (state, id) => {
  const index = getArticleIndex(state, id)
  if (index + 1 <= state.articles.list.length -1) {
    return getArticleByIndex(state, index +1)
  }
  return null
}

export const getPreviousArticle = (state, id) => {
  const index = getArticleIndex(state, id)
  if (index - 1 !== -1) {
    return getArticleByIndex(state, index -1)
  }
  return null
}

export default articles.reducer;