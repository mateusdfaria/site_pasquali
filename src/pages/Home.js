// src/pages/Home.js
import React from 'react';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import HomeText from '../components/HomeText';
import '../styles.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1 className="home-title">Bem-vindo à Pasquali Personalizados!</h1>
        <ProductList />
        <HomeText />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
