import PropTypes from 'prop-types';

const Button = ({ handleClick, text }) => (
  <button type="button" className="h-10 w-10 my-1 text-white bg-gray-400 shadow-sm rounded" onClick={() => handleClick(text)}>{text}</button>
)

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Button;
