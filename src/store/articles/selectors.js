export const getArticles = (state) => state.articles;

export const getArticle = (state, id) => state.articles.find(article => article.id === id);


export const getArticleIndex = (state, id) => state.articles.findIndex(article => article.id === id);

export const getNextArticle = (state, id) => {
  const index = getArticleIndex(state, id)
  if (index + 1 <= state.articles.length -1) {
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

const getArticleByIndex = (state, index) => state.articles[index];
