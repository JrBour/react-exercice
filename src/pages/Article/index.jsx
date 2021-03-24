import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import articles from '../../constants/articles'
import ArticleDescription from '../../components/ArticleDescription'

const Article = () => {
  let { id } = useParams();
  const [article, setArticle] = useState();

  useEffect(() => {
    const currentArticle = articles.find(article => article.id === parseInt(id, 10));
    setArticle(currentArticle);
  }, [id])

  return (
    <div>
      {article && <ArticleDescription article={article} />}
    </div>
  )
}

export default Article;
