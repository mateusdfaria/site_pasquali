import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Certifique-se de que o caminho está correto
import '../styles.css'; // Importando o CSS global

const Layout = ({ children }) => {
  return (
    <div>
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Pasquali Personalizados" className="logo" />
        </div>
        <nav className="navigation-container"> {/* Adicionando uma classe específica para o container de navegação */}
          <ul className="navigation">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">Quem Somos</Link></li> {/* Atualizar o link */}
            <li><Link to="/categories">Categorias</Link></li>
            <li><Link to="/contact">Contato</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer className="footer">
        <div className="footer-content">
          {/* Conteúdo do rodapé, se necessário */}
        </div>
      </footer>
    </div>
  );
};

export default Layout;
