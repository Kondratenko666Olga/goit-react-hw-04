import PropTypes from 'prop-types';
const ErrorMessage = ({ message }) => {
  return <div style={{ color: 'red', textAlign: 'center' }}>{message}</div>;
};

ErrorMessage.propTypes = {
    message: PropTypes.func.isRequired,
};
export default ErrorMessage;
