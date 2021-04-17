import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { retrievePosts, removePostById, getPosts } from '../../store/posts'
import Post from '../../components/Post'

const PostsContainer = () => {
  const dispatch = useDispatch();
  const posts = useSelector(getPosts);

  useEffect(() => {
    dispatch(retrievePosts())
  }, [])

  const deletePost = id => dispatch(removePostById(id))

  return (
    <>
      {posts && posts.map(post => <Post post={post} key={post.id} deletePost={deletePost} />)}
    </>
  )

}

export default PostsContainer;