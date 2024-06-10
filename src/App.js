import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Contact from './pages/Contact';
import About from './pages/About'; // Importar o componente "Quem Somos"
import Layout from './components/Layout';
import './styles.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/categories" element={<Layout><Categories /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} /> {/* Adicionar a nova rota */}
      </Routes>
    </Router>
  );
};

export default App;
