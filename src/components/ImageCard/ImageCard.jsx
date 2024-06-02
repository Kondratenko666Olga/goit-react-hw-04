import PropTypes from 'prop-types';
import styles from './ImageCard.module.css';
const ImageCard = ({ image }) => {
  return (
    <div className={styles.card}> 
      <img src={image.urls.thumb} alt={image.alt_description} />
    </div>
  );
};

ImageCard.propTypes = {
  image: PropTypes.shape({
    urls: PropTypes.shape({
      thumb: PropTypes.string.isRequired,
    }).isRequired,
    alt_description: PropTypes.string,
  }).isRequired,
};

export default ImageCard;
