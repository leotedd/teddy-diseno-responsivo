@'
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

- **Netlify (producción):** https://capable-tartufo-8f2041.netlify.app/
- **GitHub Pages:** _pendiente_ → https://leotedd.github.io/teddy-diseno-responsivo/
- **Vercel:** _pendiente_ → https://teddy-diseno-responsivo.vercel.app

---

## 🧾 Datos del proyecto

- **Autor:** Teddy (Ingeniería en Sistemas, 8.º semestre — UMG Guatemala)  
- **Marca:** Servicios Eléctricos Teddy  
- **Repositorio:** leotedd/teddy-diseno-responsivo  
- **Contacto (reemplaza por tus datos reales):**  
  - Teléfono (E.164): +502XXXXXXXX  
  - Email: tu.correo@dominio.com  
  - WhatsApp: https://wa.me/502XXXXXXXX

---

## 🧰 Tecnologías

- **React 18 + TypeScript**
- **Vite**
- **Bootstrap 5** (layout, espaciado, tipografía)
- **Font Awesome** (iconos sociales por CDN)
- CSS con **media queries** personalizadas

> Requisitos: **Node.js 18+** y **npm 9+**.

---

## ✨ Características clave

- **Cortes responsivos exactos**:
  - ≤600 px → layout móvil; **hamburguesa activa**.
  - 601–1024 px → layout tablet; **menú expandido** (sin hamburguesa).
  - ≥1025 px → layout escritorio; **menú expandido**.
- **Grid** de servicios: 1/2/3 columnas según el ancho.
- **Header** pegajoso (sticky) y accesible (aria-label, aria-expanded).
- **Imagen de marca** y CTA de contacto (teléfono / correo / WhatsApp).

---

## 📸 Evidencia de diseño responsivo

**Móvil (≤ 600 px)**  
![Móvil 600](src/assets/Responsive%20600.png)

**Tablet (601–1024 px)**  
![Tablet 601](src/assets/Responsive%20601.png)

**Escritorio (≥ 1025 px)**  
![Escritorio 1024](src/assets/Responsive%201024.png)

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
