import { useState, useEffect } from "react";
import { fetchImages } from "../services/api";
import ImageGallery from "./ImageGallery/ImageGallery";
import SearchBar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import LoadMore from "./LoadMore/LoadMore";
import "./App.css";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import toast from "react-hot-toast";
import ImageModal from "./ImageModal/ImageModal";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [maxPage, setMaxPage] = useState(0);
  const [isErrorMessage, setIsErrorMessage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (!query.trim()) return;

    const getData = async () => {
      try {
        setIsLoading(true);
        setIsErrorMessage(false);
        const data = await fetchImages(query, page);
        if (data.images.length === 0 && page === 1) {
          setIsEmpty(true);
          return;
        }
        setImages((prev) => [...prev, ...data.images]);
        setMaxPage(data.totalPages);
        setIsEmpty(false);
      } catch (error) {
        console.log(error);
        setIsErrorMessage(true);
        toast.error("Try again later...");
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [query, page]);

  const handleChangeQuery = (newQuery) => {
    toast.success(`Query changed to ${newQuery}`);
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const canLoadMore = page < maxPage && !isLoading;

  return (
    <>
      <header className="header">
        <SearchBar handleChangeQuery={handleChangeQuery} />
      </header>
      <div className="container">
        <ImageGallery images={images} onImageClick={setSelectedImage} />
      </div>
      {isErrorMessage && <ErrorMessage message="Server is dead..." />}
      {isLoading && <Loader />}
      <LoadMore onClick={() => setPage(page + 1)} isVisible={canLoadMore} />
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
      {isEmpty && (
        <p className="info-message">No images found for "{query}".</p>
      )}
    </>
  );
}

export default App;
