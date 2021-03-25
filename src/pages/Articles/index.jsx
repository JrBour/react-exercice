import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ConfirmationPopup from '../../components/ConfirmationPopup'
import { removeArticleAction } from '../../store/articles/actions'
import { getArticles } from '../../store/articles/selectors'
import ArticlePreview from '../../components/ArticlePreview'

const Articles = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const articles = useSelector(getArticles)

  const [displayPopup, setDisplayPopup] = useState(false)
  const [articleIdToRemove, setArticleIdToRemove] = useState(false)

  const removeArticle = () => {
    dispatch(removeArticleAction({ id : articleIdToRemove }))
    setArticleIdToRemove()
    setDisplayPopup(false)
  }

  const displayConfirmationPopup = articleId => {
    setArticleIdToRemove(articleId)
    setDisplayPopup(true)
  }

  return (
    <>
      {displayPopup && <ConfirmationPopup onClose={() => setDisplayPopup(false)} confirmed={removeArticle} />}
      <h1 className="text-center text-4xl font-bold">Articles</h1>
      <button className="bg-green-500 rounded px-5 py-2 ml-5" onClick={() => history.push('/create-article')} >Ajouter un article</button>
      <div className="flex flex-wrap justify-center w-1/2 mx-auto">
        {articles.map((article, index) => <ArticlePreview key={index} article={article} displayPopup={displayConfirmationPopup}/>)}
      </div>
    </>
  )
}

export default Articles;
