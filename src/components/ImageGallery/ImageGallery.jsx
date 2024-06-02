import ImageCard from '../ImageCard/ImageCard';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul>
      {images.map(image => (
        <li key={image.id} onClick={() => onImageClick(image)}>
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
