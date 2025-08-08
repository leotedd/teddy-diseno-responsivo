import React from 'react';
import herramientas from '../assets/herramientasdeelectricidad.png';
import domicilios from '../assets/serviciosadomiciliares.png';
import industriales from '../assets/serviciosdegrandesclientes.jpeg';

const cardsData = [
  {
    title: '',
    text: '',
    img: domicilios,
  },
  {
    title: '',
    text: '',
    img: industriales,
  },
  {
    title: '',
    text: '',
    img: herramientas,
  },
];

const Section: React.FC = () => (
  <section id="services" className="my-5">
    <div className="container">
      <h2 className="text-center mb-4">Nuestros Servicios</h2>
      <div className="cards-grid">
        {cardsData.map((card, i) => (
          <div className="card h-100" key={i}>
            <img
              src={card.img}
              className="card-img-top"
              alt={card.title}
              style={{ objectFit: 'cover', height: '180px' }}
            />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Section;
