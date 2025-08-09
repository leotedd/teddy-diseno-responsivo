import React from 'react';
import herramientas from '../assets/herramientasdeelectricidad.png';
import domicilios from '../assets/serviciosadomiciliares.png';
import industriales from '../assets/serviciosdegrandesclientes.jpeg';

const cardsData = [
  {
    title: 'Servicios Adomicilios',
    text: 'Ofrecemos atención rápida y profesional para resolver todo tipo de problemas eléctricos en tu hogar u oficina, garantizando seguridad y calidad en cada instalación o reparación.',
    img: domicilios,
  },
  {
    title: 'Mantenimiento de Transformadores',
    text: 'Realizamos inspecciones, reparaciones y mantenimiento preventivo de transformadores para asegurar un suministro eléctrico estable y confiable.',
    img: industriales,
  },
  {
    title: 'Equipo y Herramienta profecional ',
    text: 'Contamos con el alquiler y venta de herramientas especializadas para trabajos eléctricos, brindando calidad y precisión en cada proyecto. ',
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
