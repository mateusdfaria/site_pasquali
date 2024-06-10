// src/data/categories.js
import caneca1 from '../assets/caneca1.png';
import caneca2 from '../assets/caneca2.png';
import caneca3 from '../assets/caneca3.png';
import camisa1 from '../assets/camisa1.png';
import camisa2 from '../assets/camisa2.png';
import avental from '../assets/avental.png';
import body1 from '../assets/body1.png';
import body2 from '../assets/body2.png';
import almofada from '../assets/almofada.png';
import toalha from '../assets/toalha.png';
import quebra from '../assets/quebra-cabeça.png';
import azulejo from '../assets/azulejo.png';
import copo_longo from '../assets/copo-longo.png';
import copo_tampa from '../assets/copo-tampa.png';
import quadro from '../assets/quadro.png';
import porta_esp from '../assets/porta_esp.png';
import caderno from '../assets/caderno.png';
import bloquinho from '../assets/bloquinho.png';
import chinelo_a from '../assets/chinelo_adulto.png';
import chinelo_i from '../assets/chinelo_infantil.png';
import pantufa from '../assets/pantufa.png';
import agenda from '../assets/agenda.png';
import planner from '../assets/planner.png';
import capa_trav from '../assets/Capa travesseiro.png';
import mousepad from '../assets/mousepad.png';

const categories = {
  canecas: [
    { name: 'Caneca Porcelana', price: 'R$33,00', image: caneca1 },
    { name: 'Caneca interior e alça colorida', price: 'R$40,00', image: caneca2 },
    { name: 'Caneca c/ interior e alça de coração colorida', price: 'R$42,00', image: caneca3 },
    // ... outros itens
  ],
    camisas: [
      { name: 'Camisa tradicional 100% poliéster', price: 'R$36,00', image: camisa1 },
      { name: 'Camisa Reglan 100% poliéster', price: 'R$40,00', image: camisa2 },
      // ... outros itens
    ],
    aventais: [
      { name: 'Avental Adulto', price: 'R$31,00', image: avental },
      { name: 'Boné', price: 'R$38,00', image: avental },
      // ... outros itens
    ],
    bodies: [
      { name: 'Body manga curta 100% poliéster', price: 'R$29,00', image: body1 },
      { name: 'Body manga longa 100% poliéster', price: 'R$31,00', image: body2 },
      // ... outros itens
    ],
    almofadas: [
      { name: 'Almofada Quadrada', price: 'R$42,00', image: almofada },
      { name: 'Toalha Lavabo', price: 'R$19,00', image: toalha },
      // ... outros itens
    ],
    puzzles: [
      { name: 'Quebra Cabeça', price: 'R$20,00', image: quebra },
      { name: 'Azulejo 15x15', price: 'R$20,00', image: azulejo },
      // ... outros itens
    ],
    copos: [
      { name: 'Copo long drink', price: 'R$4,00', image: copo_longo },
      { name: 'Copo Long Drink c/ tampa', price: 'R$5,50', image: copo_tampa },
      // ... outros itens
    ],
    quadros: [
      { name: 'Quadro MDF A4', price: 'R$30,00', image: quadro },
      { name: 'Porta Espeto', price: 'R$35,00', image: porta_esp },
      // ... outros itens
    ],
    cadernos: [
      { name: 'Caderno', price: 'R$30,00', image: caderno },
      { name: 'Bloquinho A6', price: 'R$15,00', image: bloquinho },
      // ... outros itens
    ],
    Variados: [
      { name: 'Chinelo Infantil', price: 'R$30,00', image: chinelo_a },
      { name: 'Chinelo Adulto', price: 'R$35,00', image: chinelo_i },
      { name: 'Pantufa', price: 'R$40,00', image: pantufa },
      { name: 'Agenda 2 dias por pagina', price: 'R$60,00', image: agenda },
      { name: 'Planner', price: 'R$65,00', image: planner },
      { name: 'MousePad', price: 'R$15,00', image: mousepad },
      { name: 'Capa p/ Travesseiro', price: 'R$27,00', image: capa_trav },
      // ... outros itens
    ],
  };
  
  export default categories;
  