import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import ArticlePreview from '../ArticlePreview'
import articles from '../../constants/articles'

const ArticleDescription = ({ article }) => {
  const [previousArticle, setPreviousArticle] = useState()
  const [nextArticle, setNextArticle] = useState()

  useEffect(() => {
    const currentArticle = articles.findIndex(({ id }) => article.id === id);
    if (currentArticle - 1 !== -1) {
      setPreviousArticle(articles[currentArticle - 1])
    } else {
      setPreviousArticle()
    }

    if (currentArticle + 1 <= articles.length) {
      setNextArticle(articles[currentArticle + 1])
    } else {
      setNextArticle()
    }

  }, [article])

  return (
    <div className="px-10">
      <h1 className="mb-10 text-center font-semibold text-4xl">{article.title}</h1>
      <img className="w-full mb-10" src="https://picsum.photos/500/200" alt=""/>
      <p>{article.description}</p>
      <p>{article.price}</p>
      <div className="flex justify-between">
        {previousArticle && <ArticlePreview  article={previousArticle} />}
        {nextArticle && <ArticlePreview  article={nextArticle} />}
      </div>
    </div>
  );
}

ArticleDescription.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })
}

export default ArticleDescription;
