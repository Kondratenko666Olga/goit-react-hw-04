import PropTypes from 'prop-types';
import styles from './LoadMoreBtn.module.css';
const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={styles.loadMore} >
      <button className={styles.loadMoreBtn} onClick={onClick}>Load more</button>
    </div>
  );
};


LoadMoreBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
};
export default LoadMoreBtn;
