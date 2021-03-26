export const addArticleAction = payload => ({
  type: 'articles/addItem',
  payload
});

export const removeArticleAction = payload => ({
  type: 'articles/removeItem',
  payload
});