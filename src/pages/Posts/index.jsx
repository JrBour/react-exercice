import { useSelector } from 'react-redux'
import Post from '../../components/Post';
import Auth from '../../hoc/auth'
import { getPosts } from '../../store/posts'

const Posts = () => {
  const posts = useSelector(getPosts);

  return (
    <>
      <h1>Posts</h1>
      {posts.map(post => <Post key={post.id} post={post} /> )}
    </>
  )
}

export default Auth(Posts);
