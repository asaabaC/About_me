import React, { useState, useEffect } from 'react';
import './ImageSlider.css';  // Make sure the CSS file path is correct

const images = [
  '/IMG-20220827-WA0004.jpg',
  '/IMG-20210602-WA0044.jpg',
  '/IMG_20231007_100110_173.jpg',
  '/IMG_20191030_110410.jpg',
  '/1647401525202.jpg',
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="image-slider-container">
      <div className="image-slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={process.env.PUBLIC_URL + image} alt={`Slider image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
