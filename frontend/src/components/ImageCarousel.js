import React, { useState } from 'react';
import sampleimage1 from '../assets/ablock1.jpeg';
import sampleimage2 from '../assets/ablock2.jpeg';
import sampleimage3 from '../assets/ablock3.jpg';

const images = [sampleimage2, sampleimage1, sampleimage3];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-7xl mb-8">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="rounded-lg w-full h-[500px] object-cover"
      />
      <button
        onClick={handlePrevImage}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-500 transition"
      >
        &lt;
      </button>
      <button
        onClick={handleNextImage}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-500 transition"
      >
        &gt;
      </button>
    </div>
  );
};

export default ImageCarousel;
