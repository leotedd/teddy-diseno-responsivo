Servicios Eléctricos Teddy — Diseño Responsivo (React + TypeScript + Bootstrap)
Aplicación web responsiva con temática eléctrica para Servicios Eléctricos Teddy, construida con React + TypeScript y Bootstrap 5.

Móvil: ≤ 600 px

Tablet: 601–1024 px

Escritorio: ≥ 1025 px

Incluye:

Header con marca y navegación (hamburguesa solo en ≤600 px, oculta desde 601 px).

Main con título y párrafo descriptivo.

Section con 3 tarjetas de servicios.

Footer con redes sociales.

Utilidades de Bootstrap + media queries personalizadas.

🚀 Demo
Netlify (producción): https://capable-tartufo-8f2041.netlify.app/

GitHub Pages: pendiente → https://leotedd.github.io/teddy-diseno-responsivo/

🧾 Datos del proyecto
Autor: Teddy (Ingeniería en Sistemas, 8.º semestre — UMG Guatemala)

Marca: Servicios Eléctricos Teddy

Repositorio: leotedd/teddy-diseno-responsivo

🧰 Tecnologías
React 18 + TypeScript

Vite

Bootstrap 5

Font Awesome (iconos, CDN)

CSS con media queries personalizadas

Requisitos: Node.js 18+ y npm 9+.

✨ Características clave
Cortes responsivos exactos:

≤600 px → layout móvil; hamburguesa activa.

601–1024 px → layout tablet; menú expandido (sin hamburguesa).

≥1025 px → layout desktop; menú expandido.

Grid de servicios: 1/2/3 columnas según el ancho.

Header sticky y accesible (aria-label, aria-expanded).

CTA de contacto (teléfono / correo / WhatsApp) en el header (≥601 px).

📸 Evidencia de diseño responsivo
Móvil (≤ 600 px)

Tablet (601–1024 px)

Escritorio (≥ 1025 px)

# 1) Clonar
git clone https://github.com/leotedd/teddy-diseno-responsivo.git
cd teddy-diseno-responsivo

# 2) Instalar dependencias
npm install

# 3) Desarrollo
npm run dev

# 4) Build (producción)
npm run build
npm run preview   # (opcional) ver build local
# 1) Clonar
git clone https://github.com/leotedd/teddy-diseno-responsivo.git
cd teddy-diseno-responsivo

# 2) Instalar dependencias
npm install

# 3) Desarrollo
npm run dev

# 4) Build (producción)
npm run build
npm run preview   # (opcional) ver build local

🧩 Componentes
Header (src/Components/Header.tsx):
Menú hamburguesa controlado con useState (solo en ≤600 px).

Main (src/Components/Main.tsx):
Título y descripción.

Section (src/Components/Section.tsx):
Tres tarjetas con imagen, título y texto.

Footer (src/Components/Footer.tsx):

.cards-grid {
  display: grid;
  gap: 1rem;
  padding: 0 1rem;
  grid-template-columns: 1fr; /* ≤600 */
}

@media (min-width: 601px) and (max-width: 1024px) {
  .cards-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1025px) {
  .cards-grid { grid-template-columns: repeat(3, 1fr); }
}
/* ≤600px: .nav-links oculto, .menu-toggle visible */

@media (min-width: 601px) and (max-width: 1024px) {
  .nav-links { display: flex; }
  .contact-cta { display: flex; }
  .menu-toggle { display: none; }
  .mobile-menu { display: none !important; }
}

@media (min-width: 1025px) {
  .header-container { padding: .8rem 1rem; }
  .nav-links { gap: 1.25rem; }
}
🌐 Despliegue
Netlify: build automático desde GitHub (npm run build, carpeta dist).

GitHub Pages (opcional):

Instalar: npm i -D gh-pages

vite.config.ts:
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/teddy-diseno-responsivo/',
})
{
  "scripts": {
    "predeploy": "vite build",
    "deploy": "gh-pages -d dist"
  }
}
{
  "scripts": {
    "predeploy": "vite build",
    "deploy": "gh-pages -d dist"
  }
}
