import Auth from '../../hoc/auth'
import PostForm from '../../components/PostForm'

const CreatePost = () => <PostForm />

export default Auth(CreatePost);