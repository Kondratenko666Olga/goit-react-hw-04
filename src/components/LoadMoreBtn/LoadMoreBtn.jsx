import PropTypes from 'prop-types';
const LoadMoreBtn = ({ onClick }) => {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <button onClick={onClick}>Load more</button>
    </div>
  );
};


LoadMoreBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
};
export default LoadMoreBtn;
