import {useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Toaster, toast } from 'react-hot-toast';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { useLocalStorage } from './hooks/useLocalStorage';
import LoaderMessage from './components/Loader/Loader';

const App = () => {
  const [query, setQuery] = useLocalStorage('query', '');
  const [images, setImages] = useLocalStorage('images', []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchImages = useCallback(async () => {
    setLoading(true);

    console.log('Fetching images...');

    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query, page, per_page: 12 },
        headers: {
          Authorization: `Client-ID ejxFSFIFRaj69H35OnJtbUJb4DQ3p23sjfoLE-1UzAQ`,
        },
      });

      console.log('Received response:', response);

      setImages(prevImages => [...prevImages, ...response.data.results]);
      setError(null);
    } catch (error) {
      console.error('Error fetching images:', error.response || error.message);
      setError('Failed to fetch images');
    } finally {
      setLoading(false);

      console.log('Fetching completed.');

    }
  }, [query, page, setImages]);

  useEffect(() => {
    console.log('Query:', query);
    console.log('Page:', page);


    if (!query) return;
    // setImages([]);
    fetchImages();
  }, [query, page, fetchImages]);

  const handleSearchSubmit = newQuery => {
    console.log('Submitting search with query:', newQuery);



    if (newQuery === '') {
      toast.error('Please enter a search term');
      return;
    }
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    console.log('Request');
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      <Toaster />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={setSelectedImage} />
      {loading && <LoaderMessage />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore} />}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};

export default App;
