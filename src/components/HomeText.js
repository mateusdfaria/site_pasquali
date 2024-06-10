// src/components/HomeText.js
import React from 'react';
import '../styles.css';

const HomeText = () => {
  return (
    <div className="home-text">
      <h2 className="poetsen-one-regular">O Que Fazemos</h2>
      <p>
        Transformamos itens comuns em peças únicas e memoráveis. Desde canecas que aquecem o coração até cadernos que inspiram criatividade e camisas que expressam sua personalidade, temos uma ampla variedade de produtos prontos para serem personalizados do seu jeito.
      </p>
      <h2 className="poetsen-one-regular">Por Que Escolher a Pasquali Personalizados?</h2>
      <h3 className="poetsen-one-regular">Qualidade Impecável</h3>
      <p>
        Cada produto é feito com materiais de alta qualidade, garantindo durabilidade e beleza em cada detalhe.
      </p>
      <h3 className="poetsen-one-regular">Personalização Infinita</h3>
      <p>
        Seu desejo é nosso comando! Com inúmeras opções de design, cores e frases, você pode criar o produto perfeito para qualquer ocasião.
      </p>
      <h3 className="poetsen-one-regular">Presente Perfeito</h3>
      <p>
        Precisa de um presente de última hora? Nós cuidamos disso! Nossos produtos personalizados são ideais para aniversários, datas comemorativas, eventos corporativos e muito mais.
      </p>
      <h3 className="poetsen-one-regular">Atendimento Dedicado</h3>
      <p>
        Nossa equipe está aqui para ajudar você em cada passo do processo. Desde a escolha do produto até a finalização do design, garantimos uma experiência de compra tranquila e satisfatória.
      </p>
      <h2 className="poetsen-one-regular">Destaques da Nossa Coleção</h2>
      <ul>
        <li>Canecas Personalizadas: Comece o dia com uma caneca que reflete sua personalidade.</li>
        <li>Cadernos Exclusivos: Ideal para anotações, estudos ou como presente para aquele amigo criativo.</li>
        <li>Camisas Customizadas: Vista suas ideias e compartilhe sua mensagem com o mundo.</li>
        <li>E Muito Mais: Explore nossa linha de produtos e descubra infinitas possibilidades de personalização.</li>
      </ul>
    </div>
  );
};

export default HomeText;
