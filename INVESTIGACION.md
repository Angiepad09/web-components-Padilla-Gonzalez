# Actividad evaluativa: Web Components, HTMLTemplates y frameworks

## Parte 1 · Investigación: Web Components

### 1. ¿Qué problema resuelven los Web Components y qué aporta cada tecnología: Custom Elements, Shadow DOM y HTMLTemplates?
Sin Web Components, reutilizar una pieza de interfaz (una tarjeta, un menú) implica copiar
HTML, CSS y JS, y además los estilos de una parte pueden dañar otra. Los Web Components
permiten crear etiquetas propias, reutilizables y encapsuladas, que funcionan en cualquier
página sin instalar nada porque son un estándar del navegador.
- **Custom Elements:** Permiten definir una etiqueta nueva con una clase de JavaScript que controla su comportamiento.
- **Shadow DOM:** Da al componente un DOM y unos estilos aislados del resto de la página.
- **HTMLTemplates:** Guardan un bloque de HTML inactivo que se clona cada vez que se necesita una copia del componente.


### 2. ¿En qué se diferencia un <template> de un <div> oculto con display: none?

Un `<div>` oculto sí forma parte del DOM: solo no se ve. Sus scripts se ejecutan, sus
imágenes se descargan y `document.querySelector` encuentra sus elementos. El contenido de
un `<template>` es inerte: no se muestra, no ejecuta scripts ni carga imágenes, y
`document.querySelector` no encuentra lo que hay dentro, porque vive en un fragmento aparte
(`template.content`). Solo "cobra vida" cuando se clona con JavaScript y se inserta en la
página.

### 3. ¿Qué cambia entre el Shadow DOM en modo "open" y en modo "closed"?
### 4. ¿Qué es un <slot> y para qué sirve en un componente reutilizable?
### 5. ¿Qué navegadores soportan hoy los Web Components? Indica la fuente y la fecha de consulta.



## Fuentes

### Parte 1
1. https://developer.mozilla.org/es/docs/Web/API/Web_components
2. https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/template


### Parte 2