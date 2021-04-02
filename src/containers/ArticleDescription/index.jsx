import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getArticle, retrieveArticles } from '../../store/articles'
import ArticleDescription from '../../components/ArticleDescription'

const ArticleDescriptionContainer = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const article = useSelector(state => getArticle(state, parseFloat(id)));

  useEffect(() => {
    if (!article) {
      dispatch(retrieveArticles())
    }
  })

  return (
    <>
      {article && <ArticleDescription article={article} />}
    </>
  )

}

export default ArticleDescriptionContainer;
