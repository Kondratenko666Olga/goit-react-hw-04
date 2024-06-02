import PropTypes from 'prop-types';
const ImageCard = ({ image }) => {
  return (
    <div>
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
