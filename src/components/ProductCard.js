// src/components/ProductCard.js
import React, { useState, useEffect } from 'react';
import '../styles.css';

const ProductCard = ({ image1, image2, title, description }) => {
  const [currentImage, setCurrentImage] = useState(image1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === image1 ? image2 : image1));
    }, 2000); // Alterna a cada 2 segundos

    return () => clearInterval(interval);
  }, [image1, image2]);

  return (
    <div className="product-card">
      <img src={currentImage} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-description">{description}</p>
    </div>
  );
};

export default ProductCard;
