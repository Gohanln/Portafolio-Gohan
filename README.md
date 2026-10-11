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

El nombre, la presentación y los enlaces de contacto actuales se pueden editar
en `src/App.tsx`. Añade las URLs de demostración a cada proyecto cuando estén
publicadas para habilitar la navegación directa desde la galería.

Las demos y repositorios públicos verificados también se configuran por proyecto
con `liveUrl` y `sourceUrl`; si no se encuentra un enlace público, la ficha lo
indica sin inventar un destino.
