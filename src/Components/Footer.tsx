import React from 'react';

const Footer: React.FC = () => (
  <footer id="contact" className="bg-primary text-white py-4">
    <div className="container text-center">
      <p>Síguenos en:</p>
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white mx-2"
      >
        <i className="fab fa-facebook fa-lg"></i>
      </a>
      
      
      <p className="mt-3">&copy; {new Date().getFullYear()} ElectroPro. Todos los derechos reservados.</p>
    </div>
  </footer>
);

export default Footer;
