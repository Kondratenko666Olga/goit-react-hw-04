
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const ImageModal = ({ image, onClose }) => {
  const { urls, alt_description } = image;

  return (
    <Modal
      isOpen={Boolean(image)}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      ariaHideApp={false}
      style={{
        content: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'rgba(0, 0, 0, 0.8)',
        },
      }}
    >
      <img src={urls.regular} alt={alt_description} />
    </Modal>
  );
};

ImageModal.propTypes = {
    image: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ImageModal;
