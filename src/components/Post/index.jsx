import PropTypes from 'prop-types';

const Post = ({ post }) => (
  <div>

  </div>
)

Post.propTypes = {
  post: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string,
    likes: PropTypes.number
  }).isRequired,
  user: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string,
  }).isRequired
}

export default Post;