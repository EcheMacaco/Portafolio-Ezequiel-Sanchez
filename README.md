# Portafolio de Ezequiel Sánchez Pais

Este proyecto es un portafolio personal desarrollado en React, creado con Create React App. Incluye animaciones con Framer Motion, videos de proyectos, y despliegue automático en GitHub Pages.

## Requisitos previos

- Node.js >= 14.x
- npm >= 6.x

## Instalación rápida

1. Clona el repositorio:
   ```bash
   git clone https://github.com/EcheMacaco/Portafolio-Ezequiel-Sanchez.git
   cd Portafolio-Ezequiel-Sanchez
   ```
2. Ejecuta el script de instalación:
   ```bash
   bash setup.sh
   ```
   El script instalará dependencias y te preguntará si deseas actualizar las versiones si hay paquetes desactualizados.

## Scripts disponibles

- `npm start` — Inicia la app en modo desarrollo ([http://localhost:3000](http://localhost:3000)).
- `npm run build` — Genera la versión optimizada para producción en la carpeta `build`.
- `npm run test` — Ejecuta los tests (si existen archivos de prueba en el proyecto). Este script es estándar en proyectos creados con Create React App.
- `npm run deploy` — Despliega la app en GitHub Pages (ejecuta primero `npm run build`).

## Despliegue

El desarrollo debe realizarse siempre en la rama principal (main o master). La rama `gh-pages` es utilizada únicamente para el despliegue automático generado por el comando `npm run deploy`.

El despliegue se realiza automáticamente en la rama `gh-pages` usando el paquete `gh-pages`.

1. Ejecuta:
   ```bash
   npm run build
   npm run deploy
   ```
2. La app estará disponible en: https://echemacaco.github.io/Portafolio-Ezequiel-Sanchez/

## Estructura del proyecto

- `/src` — Código fuente de la app React
  - `/Components` — Componentes reutilizables de la app
    - `/about` — Sección de información personal
    - `/contact` — Sección de contacto
    - `/cover` — Portada o presentación principal
    - `/navbar` — Barra de navegación
    - `/projects` — Sección de proyectos realizados
    - `/slider` — Carrusel o slider de contenido
  - `/Media` — Imágenes y videos utilizados en la app
- `/public` — Archivos públicos y estáticos
- `/build` — Carpeta generada para producción
- `setup.sh` — Script de instalación automatizada


## Dependencias principales

- React
- Framer Motion
- React Player
- gh-pages (para despliegue)

## Notas

- El archivo `.gitignore` ya excluye node_modules, archivos de entorno y carpetas de build.
- Puedes personalizar la información de contacto y los proyectos desde los componentes en `/src/Components`.

## Contacto

Puedes contactarme a través de:

- Email: eche_@hotmail.com
- LinkedIn: https://www.linkedin.com/in/ezequiel-sanchez-pais/
- GitHub: https://github.com/EcheMacaco

---

Desarrollado por Ezequiel Sánchez Pais.
