// src/Gallery.js
import React from 'react';
import './gallery.css';

const Gallery = () => {
  const images = [
    "img_1.jpg",
    "img_2.jpg",
    "img_3.jpg",
    "img_4.jpg",
    "img_5.jpg",
  ];
  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="gallery">
        {images.map((image, index) => (
          <div className="card" key={index}>
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
