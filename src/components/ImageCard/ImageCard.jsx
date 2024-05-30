import PropTypes from 'prop-types';
const ImageCard = ({ image }) => {
  return (
    <div>
      <img src={image.urls.thumb} alt={image.alt_description} />
    </div>
  );
};

ImageCard.propTypes = {
    image: PropTypes.func.isRequired,
};

export default ImageCard;
