# Servicios Eléctricos Teddy — Diseño Responsivo (React + TypeScript + Bootstrap)

Aplicación web **responsiva** con temática eléctrica para **Servicios Eléctricos Teddy**.  
Implementada con **React + TypeScript** y **Bootstrap 5**, cumpliendo los cortes:

- **Móvil:** ≤ **600 px**
- **Tablet:** **601–1024 px**
- **Escritorio:** ≥ **1025 px**

Incluye:
- **Header** con marca y navegación (**hamburguesa solo en ≤600 px**; oculta a partir de 601 px).
- **Main** con título y párrafo descriptivo.
- **Section** con **3 tarjetas** de servicios.
- **Footer** con redes sociales.
- Utilidades de Bootstrap + **media queries personalizadas**.

---

## 🚀 Demo

- **Vercel:** _pendiente_ → *(ejemplo)* `https://teddy-diseno-responsivo.vercel.app`  
- **GitHub Pages:** _pendiente_ → *(ejemplo)* `https://leotedd.github.io/teddy-diseno-responsivo/`

> Actualiza estos enlaces cuando publiques.

---

## 🧾 Datos del proyecto

- **Autor:** Teddy (Ingeniería en Sistemas, 8.º semestre — UMG Guatemala)  
- **Marca:** Servicios Eléctricos Teddy  
- **Repositorio:** `leotedd/teddy-diseno-responsivo`  
- **Contacto (reemplaza por tus datos reales):**  
  - Teléfono (E.164): `+502XXXXXXXX`  
  - Email: `tu.correo@dominio.com`  
  - WhatsApp: `https://wa.me/502XXXXXXXX`

---

## 🧰 Tecnologías

- **React 18 + TypeScript**
- **Vite**
- **Bootstrap 5** (layout, espaciado, tipografía)
- **Font Awesome** (iconos sociales por CDN)
- CSS con **media queries** personalizadas

> Requisitos: **Node.js 18+** y **npm 9+**.

---

---

## ✨ Características clave

- **Cortes responsivos exactos**:
  - ≤600 px → layout móvil; **hamburguesa activa**.
  - 601–1024 px → layout tablet; **menú expandido** (sin hamburguesa).
  - ≥1025 px → layout escritorio; **menú expandido**.
- **Grid** de servicios: 1/2/3 columnas según el ancho.
- **Header** pegajoso (sticky) y accesible (`aria-label`, `aria-expanded`).
- **Imagen de marca** y CTA de contacto (teléfono / correo / WhatsApp).

---

## 📸 Evidencia de diseño responsivo

**Móvil (≤ 600 px)**  
![Móvil 600](<src/assets/Responsive 600.png>)

**Tablet (601–1024 px)**  
![Tablet 601](<src/assets/Responsive 601.png>)

**Escritorio (≥ 1025 px)**  
![Escritorio 1024](<src/assets/Responsive 1024.png>)

> Nota: uso `<ruta>` con ángulos para que GitHub renderice bien rutas con **espacios** en el nombre del archivo.

---

## ⚙️ Instalación y uso

```bash
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

.cards-grid {
  display: grid;
  gap: 1rem;
  padding: 0 1rem;
  grid-template-columns: 1fr; /* ≤600 */
}

/* 601–1024: 2 columnas */
@media (min-width: 601px) and (max-width: 1024px) {
  .cards-grid { grid-template-columns: repeat(2, 1fr); }
}

/* ≥1025: 3 columnas */
@media (min-width: 1025px) {
  .cards-grid { grid-template-columns: repeat(3, 1fr); }
}

/* Por defecto (≤600px): .nav-links oculto, .menu-toggle visible */

/* 601–1024: mostrar nav y CTA; ocultar hamburguesa y menú móvil */
@media (min-width: 601px) and (max-width: 1024px) {
  .nav-links { display: flex; }
  .contact-cta { display: flex; }
  .menu-toggle { display: none; }
  .mobile-menu { display: none !important; }
}

/* ≥1025: igual que tablet con un poco más de espacio */
@media (min-width: 1025px) {
  .header-container { padding: .8rem 1rem; }
  .nav-links { gap: 1.25rem; }
}

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

