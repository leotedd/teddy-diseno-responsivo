import React from 'react';
import logo from '../assets/logoelectricidad.png';

const Header: React.FC = () => (
  <header id="home">
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <img
            src={logo}
            alt="Logo Servicios Electricos Teddy"
            style={{ height: 40, marginRight: '0.5rem' }}
          />
          Servicios Electricos Teddy
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Menú de navegación"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#home">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Servicios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
