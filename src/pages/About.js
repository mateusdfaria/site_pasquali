import React from 'react';
import '../styles.css'; // Importando o CSS global
import foto1 from '../image/foto.jpg'; // Ajuste o caminho conforme necessário
import foto2 from '../image/foto2.jpg'; // Ajuste o caminho conforme necessário
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="about-page">
      <h2 className="about-title">Quem Somos</h2>
      <div className="about-content">
        <div className="about-frame">
          <img src={foto1} alt="Foto 1" className="about-photo" />
        </div>
        <p className="about-text">
          Bem-vindo à Pasquali Personalizados! Nós somos especializados em oferecer uma ampla variedade de produtos personalizados, desde canecas, camisetas até cadernos. Nosso objetivo é transformar suas ideias em realidade com produtos de alta qualidade e um toque único.
        </p>
        <div className="about-frame">
          <img src={foto2} alt="Foto 2" className="about-photo" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
