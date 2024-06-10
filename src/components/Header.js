// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="contact-info">
          <span><i className="fa fa-phone"></i> (47) 99203-9141</span>
          <span><i className="fa fa-envelope"></i> pasqualipersonalizados@gmail.com</span>
          <span><i className="fab fa-instagram"></i></span>
        </div>
        <div className="logo-container">
          <img src={logo} alt="Pasquali Personalizados" className="logo" />
        </div>
        <nav className="navigation">
          <Link to="/">Inicio</Link>
          <Link to="/">Quem Somos</Link>
          <Link to="/categories">Categorias</Link>
          <Link to="/">Contato</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
