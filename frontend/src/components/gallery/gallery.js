// src/Gallery.js
import React from 'react';
import './gallery.css';

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <div className="gallery">
        <div className="card">
        <img src="img_1.jpg" alt="img"></img>
        </div>
        <div className="card">
        <img src="img_2.jpg" alt="img"></img>
        </div>
        <div className="card">
        <img src="img_3.jpg" alt="img"></img>
        </div>
        <div className="card">
        <img src="img_4.jpg" alt="img"></img>
        </div>
        <div className="card">
        <img src="img_5.jpg" alt="img"></img>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
