# Portafolio de Gohan

Portafolio personal hecho con React, TypeScript y Vite. Reúne sitios web,
aplicaciones y juegos en una galería con búsqueda, filtros y fichas de proyecto.

## Requisitos

- Node.js 18 o superior
- npm

## Desarrollo local

```sh
npm install
npm run dev
```

## Compilar y revisar

```sh
npm run build
npm run lint
```

## Personalizar el contenido

Los proyectos, sus descripciones y categorías están definidos en `src/App.tsx`.
Los estilos de la página se encuentran en `src/App.css` y `src/index.css`.
Las capturas locales usadas como portadas se guardan en `public/previews`.
Las demos locales se publican desde `public/demos`; cada tarjeta las abre en una
pestaña nueva. Love Her, Novia so no y Tercer mes abren sus demos públicas.

El nombre, la presentación y los enlaces de contacto actuales se pueden editar
en `src/App.tsx`. La ruta local de cada proyecto se configura con `demoPath`;
las demos remotas usan `liveUrl`.

Los archivos estáticos de cada demo local se guardan dentro de su propia carpeta
para conservar sus recursos y navegación multipágina.
