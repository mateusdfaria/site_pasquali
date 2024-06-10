import React, { useState } from 'react';
import '../styles.css';
import categories from '../data/categories'; // Importe a estrutura de dados criada


const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('canecas');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="categories-page">
      <div className="sidebar">
        <ul>
          {Object.keys(categories).map((category) => (
            <li key={category} onClick={() => handleCategoryChange(category)}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </li>
          ))}
        </ul>
      </div>
      <div className="products">
        {categories[selectedCategory].map((item, index) => (
          <div key={index} className="product-item">
            <img src={item.image} alt={item.name} className="product-image" />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
