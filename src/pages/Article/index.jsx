import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getArticle } from '../../store/articles'
import ArticleDescription from '../../components/ArticleDescription'

const Article = () => {
  let { id } = useParams();
  const article = useSelector(state => getArticle(state, id));

  return (
    <div>
      {article && <ArticleDescription article={article} />}
    </div>
  )
}

export default Article;
