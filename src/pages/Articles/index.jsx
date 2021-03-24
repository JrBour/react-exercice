import { useHistory } from 'react-router-dom'
import ArticlePreview from '../../components/ArticlePreview'
import articlesList from '../../constants/articles'

const Articles = () => {
  const history = useHistory();
  return (
    <>
      <h1 className="text-center text-4xl mt-10 font-bold">Articles</h1>
      <button className="bg-green-500 rounded px-5 py-2 ml-5" onClick={() => history.push('/create-article')} >Ajouter un article</button>
      <div className="flex flex-wrap justify-center w-1/2 mx-auto">
        {articlesList.map((article, index) => <ArticlePreview key={index} article={article}/>)}
      </div>
    </>
  )
}

export default Articles;
