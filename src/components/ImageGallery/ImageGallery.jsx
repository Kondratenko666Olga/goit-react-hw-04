import ImageCard from '../ImageCard/ImageCard';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ images, onImageClick }) => {
  return (
        <ul className={styles.cardList}>
        {images.map(image => (
          <li className={styles.galleryItem} key={image.id} onClick={() => onImageClick(image)}>
            <ImageCard image={image} />
          </li>
        ))}
      </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
