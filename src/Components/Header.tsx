import { useEffect, useState } from 'react';
import logo from '../assets/logoelectricidad.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Cierra el menú si se ensancha la pantalla (evita que quede abierto)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 601 && menuOpen) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  // ❗ Cambia estos datos por los tuyos reales
  const PHONE_E164 = '+50212345678'; // ejemplo: +5025XXXXXXXX  (solo dígitos)
  const EMAIL = 'teddy.electricos@example.com';

  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Servicios Eléctricos Teddy" />
          <span>Servicios Eléctricos Teddy</span>
        </div>

        {/* Menú de escritorio/tablet */}
        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#home">Inicio</a>
          <a href="#services">Servicios</a>
          <a href="#contact">Contacto</a>
        </nav>

        {/* CTA de contacto (solo ≥601px) */}
        <div className="contact-cta">
          <a className="btn-call" href={`tel:${PHONE_E164}`}>Llámanos</a>
          <a className="btn-mail" href={`mailto:${EMAIL}`}>Escríbenos</a>
        </div>

        {/* Botón menú hamburguesa (solo móvil ≤600px) */}
        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Menú móvil (solo visible cuando menuOpen=true y ≤600px) */}
      {menuOpen && (
        <div className="mobile-menu" role="menu">
          <a href="#home" onClick={() => setMenuOpen(false)}>Inicio</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Servicios</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a>

          <hr />
          <a href={`tel:${PHONE_E164}`} onClick={() => setMenuOpen(false)}>Llámanos</a>
          <a href={`mailto:${EMAIL}`} onClick={() => setMenuOpen(false)}>Escríbenos</a>
          <a href={`https://wa.me/${PHONE_E164.replace('+', '')}`} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
