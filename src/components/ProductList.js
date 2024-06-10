// src/components/ProductList.js
import React from 'react';
import ProductCard from './ProductCard';
import '../styles.css';

// Importando imagens diretamente
import canecaImage1 from '../image/caneca1.jpg';
import canecaImage2 from '../image/caneca2.jpg';
// Importe outras imagens conforme necessário
import camisaImage1 from '../image/camisa1.jpg';
import camisaImage2 from '../image/camisa2.jpg';
import cadernoImage1 from '../image/caderno1.jpg';
import cadernoImage2 from '../image/caderno2.jpg';

const products = [
  {
    image1: canecaImage1,
    image2: canecaImage2,
    title: 'Caneca Personalizada',
    description: 'Temos uma imensa variedade de Canecas, Xicaras e Garrafas, tudo personalizada do seu jeito.',
  },
  {
    image1: camisaImage1, // Substitua com image2_1 quando disponível
    image2: camisaImage2, // Substitua com image2_2 quando disponível
    title: 'Camisa Personalizada',
    description: 'Camisas de algodão ou dryfit, com imagens ou frases marcantes, tudo do personalizada do seu jeito.',
  },
  {
    image1: cadernoImage1, // Substitua com image3_1 quando disponível
    image2: cadernoImage2, // Substitua com image3_2 quando disponível
    title: 'Caderno Personalizado',
    description: 'Variedades de cadernos e agendas, com imagens, recados ou frases, tudo personalizada do seu jeito.',
  },
  // Adicione mais produtos conforme necessário
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image1={product.image1}
          image2={product.image2}
          title={product.title}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductList;
