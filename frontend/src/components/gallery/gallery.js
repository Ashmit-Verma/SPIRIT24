// src/Gallery.js
import React, { useEffect, useState, useRef } from 'react';
import './gallery.css';

const Gallery = () => {
  const images = [
    "img_1.jpg",
    "img_2.jpg",
    "img_3.jpg",
    "img_4.jpg",
    "img_5.jpg",
    "img_6.jpg",
    "img_7.jpg",
    "img_1.jpg",
    "img_2.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalImages = images.length;
  const carouselRef = useRef(null);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isHovered]);

  useEffect(() => {
    if (currentIndex === totalImages) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500); // Duration of the transition
    }
  }, [currentIndex, totalImages]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="carousel" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div
          className={`carousel-track ${isTransitioning ? 'transition' : ''}`}
          ref={carouselRef}
          style={{
            transform: `translateX(-${(currentIndex % totalImages) * (100 / totalImages)}%)`,
          }}
        >
          {images.concat(images).map((image, index) => (
            <div className="card" key={index}>
              <img className="galleryimg" src={image} alt={`Image ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
