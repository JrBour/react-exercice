import { useHistory } from 'react-router-dom'
import Auth from '../../hoc/auth'
import PostsContainer from '../../containers/Posts'
import Button from '../../components/Button'

const Posts = () => {
  const history = useHistory();
  
  return (
    <>
      <h1 className="text-center text-3xl font-bold py-4">Posts</h1>
      <div className="w-10/12 mx-auto">
        <Button text="Ajouter un post" handleClick={() => history.push('/create-post')} />
        <PostsContainer />
      </div>
    </>
  )
}

export default Auth(Posts);
