import PropTypes from 'prop-types';
const ImageCard = ({ image }) => {
  return (
      <img src={image.urls.thumb} alt={image.alt_description} />
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
