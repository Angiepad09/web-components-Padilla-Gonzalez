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

En los dos modos el contenido está encapsulado y los estilos no se mezclan. La diferencia es el acceso desde fuera: con "open", la propiedad elemento.shadowRoot devuelve la raíz y otro código puede leer o modificar el interior del componente. Con "closed", elemento.shadowRoot devuelve null y solo la clase que guardó la referencia puede manipularlo. "closed" no es una medida de seguridad real; casi siempre se usa "open" porque facilita las pruebas y la depuración.

### 4. ¿Qué es un <slot> y para qué sirve en un componente reutilizable?

Un <slot> es un "hueco" dentro del Shadow DOM donde se muestra el contenido que el usuario escribe entre las etiquetas del componente. Así el componente define la estructura y el estilo, pero quien lo usa decide parte del contenido. Con name="..." se pueden tener varios huecos con nombre, y el texto dentro del <slot> sirve como valor por defecto si no se envía nada. En nuestra ficha, el slot nota permite escribir una observación distinta para cada mascota.

### 5. ¿Qué navegadores soportan hoy los Web Components? Indica la fuente y la fecha de consulta.

Todos los navegadores modernos: Chrome, Edge, Firefox, Safari y Opera, en escritorio y en móvil: Chrome Android, Safari iOS, Samsung Internet. MDN los marca como Baseline: ampliamente disponible, con soporte en todos los navegadores principales desde enero de 2020, cuando salió Edge 79 basado en Chromium. Internet Explorer nunca los soportó y solo funcionaban con polyfills.

Fuentes: MDN Web Docs, "Web Components", y Can I use, "Custom Elements (V1)". Consulta el 17 de noviembre de 2026.

## Fuentes

### Parte 1

1. https://developer.mozilla.org/es/docs/Web/API/Web_components
2. https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/template
3. https://developer.mozilla.org/es/docs/Web/API/Web_components/Using_shadow_DOM
4. https://developer.mozilla.org/es/docs/Web/API/Web_components/Using_templates_and_slots
5. https://web.dev/articles/custom-elements-v1
6. https://caniuse.com/custom-elementsv1

### Parte 2