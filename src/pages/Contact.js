import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../styles.css'; // Importando o CSS global
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="contact-page">
      <h2 className="contact-title">Entre em Contato Conosco!</h2>
      <p className="contact-info">Telefone: (47) 999203-9141</p>
      <p className="contact-call-to-action">
        Siga-nos no Instagram para ver nossas últimas criações e novidades! Utilize nosso WhatsApp para acessar nosso catálogo completo e conversar diretamente conosco.
      </p>
      <div className="contact-icons">
        <a href="https://www.instagram.com/pasquali.personalizados" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <FaInstagram size={60} />
        </a>
        <a href="https://wa.me/5547992039141" target="_blank" rel="noopener noreferrer" className="contact-icon">
          <FaWhatsapp size={60} />
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
