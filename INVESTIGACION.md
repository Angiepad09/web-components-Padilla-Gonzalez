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


### 2. ¿En qué se diferencia un `<template>` de un `<div>` oculto con display: none?

Un `<div>` oculto sí forma parte del DOM: solo no se ve. Sus scripts se ejecutan, sus
imágenes se descargan y `document.querySelector` encuentra sus elementos. El contenido de
un `<template>` es inerte: no se muestra, no ejecuta scripts ni carga imágenes, y
`document.querySelector` no encuentra lo que hay dentro, porque vive en un fragmento aparte
(`template.content`). Solo "cobra vida" cuando se clona con JavaScript y se inserta en la
página.

### 3. ¿Qué cambia entre el Shadow DOM en modo "open" y en modo "closed"?

En los dos modos el contenido está encapsulado y los estilos no se mezclan. La diferencia es el acceso desde fuera: con "open", la propiedad elemento.shadowRoot devuelve la raíz y otro código puede leer o modificar el interior del componente. Con "closed", elemento.shadowRoot devuelve null y solo la clase que guardó la referencia puede manipularlo. "closed" no es una medida de seguridad real; casi siempre se usa "open" porque facilita las pruebas y la depuración.

### 4. ¿Qué es un `<slot>` y para qué sirve en un componente reutilizable?

Un <slot> es un "hueco" dentro del Shadow DOM donde se muestra el contenido que el usuario escribe entre las etiquetas del componente. Así el componente define la estructura y el estilo, pero quien lo usa decide parte del contenido. Con name="..." se pueden tener varios huecos con nombre, y el texto dentro del <slot> sirve como valor por defecto si no se envía nada. En nuestra ficha, el slot nota permite escribir una observación distinta para cada mascota.

### 5. ¿Qué navegadores soportan hoy los Web Components? Indica la fuente y la fecha de consulta.

Todos los navegadores modernos: Chrome, Edge, Firefox, Safari y Opera, en escritorio y en móvil: Chrome Android, Safari iOS, Samsung Internet. MDN los marca como Baseline: ampliamente disponible, con soporte en todos los navegadores principales desde enero de 2020, cuando salió Edge 79 basado en Chromium. Internet Explorer nunca los soportó y solo funcionaban con polyfills.

Fuentes: MDN Web Docs, "Web Components", y Can I use, "Custom Elements (V1)". Consulta el 17 de noviembre de 2026.

### Parte 2 · Investigación: frameworks, librerías y Node.js.

## 1. Diferencia entre estándar del navegador, librería, framework y entorno de ejecución

- **Estándar del navegador:** Son tecnologías y reglas que los navegadores reconocen de forma nativa, como HTML, CSS y JavaScript. Por ejemplo, Web Components permite crear etiquetas personalizadas sin instalar librerías externas.

- **Librería:** Es un conjunto de herramientas y funciones que el programador utiliza cuando las necesita. Por ejemplo, React permite crear interfaces mediante componentes y el desarrollador decide cómo organizar su aplicación.

- **Framework:** Es una estructura de trabajo que proporciona herramientas y reglas para desarrollar aplicaciones. Por ejemplo, Angular ofrece componentes, rutas, formularios y otras herramientas para organizar proyectos grandes.

- **Entorno de ejecución:** Es el entorno que permite ejecutar código JavaScript fuera del navegador. Por ejemplo, Node.js permite ejecutar JavaScript en el servidor y desarrollar herramientas de programación.

## 2. Tabla comparativa

| Criterio | Web Components nativos | React | Vue | Angular |
|---|---|---|---|---|
| **Tipo** | Estándar del navegador. | Librería de JavaScript. | Framework progresivo de JavaScript. | Framework de desarrollo web. |
| **Cómo se crea un componente** | Mediante Custom Elements, clases JavaScript, Shadow DOM y HTML Templates. | Mediante funciones o clases que devuelven interfaces usando JSX. | Mediante componentes con templates, JavaScript y estilos. | Mediante clases TypeScript, el decorador @Component y plantillas HTML. |
| **Necesita instalar herramientas (npm)** | No, porque utiliza funciones nativas del navegador. | Generalmente sí, para instalar React y sus herramientas de desarrollo. | Generalmente sí, para instalar Vue y sus herramientas de desarrollo. | Sí, normalmente utiliza npm y Angular CLI para crear y administrar proyectos. |
| **Ventajas principales** | No necesita dependencias externas, funciona con estándares web y permite reutilizar componentes en diferentes proyectos. | Permite crear interfaces dinámicas, reutilizar componentes y controlar los cambios de información. | Tiene una sintaxis sencilla, es flexible y permite desarrollar aplicaciones de diferentes tamaños. | Ofrece una estructura organizada, herramientas integradas y facilita el trabajo en equipos grandes. |
| **Desventajas principales** | Requiere escribir más código manualmente y administrar por cuenta propia algunas funcionalidades. | Necesita herramientas adicionales para manejar rutas y otras funcionalidades de una aplicación completa. | Algunas aplicaciones necesitan herramientas adicionales para funcionalidades avanzadas y proyectos grandes. | Tiene una curva de aprendizaje mayor y requiere conocer TypeScript y su estructura de trabajo. |

## 3. ¿Qué es Node.js, para qué se usa y qué relación tiene npm con React, Vue y Angular?

Node.js es un entorno de ejecución que permite ejecutar JavaScript fuera del navegador. Se utiliza para crear servidores, aplicaciones de red, herramientas de desarrollo y ejecutar programas JavaScript.

npm es el administrador de paquetes que permite instalar, actualizar y administrar librerías y dependencias de JavaScript. Se utiliza junto con Node.js para instalar herramientas y paquetes de React, Vue y Angular.

**Ejemplo de una tienda en línea que utiliza React y Node.js:**

- **React:** Se encarga de la parte visual de la tienda, como mostrar los productos, el carrito de compras, los botones y las interacciones con el usuario.
- **Node.js:** Se encarga de ejecutar el servidor, procesar solicitudes, comunicarse con la base de datos y gestionar operaciones como los pedidos.

En conclusión, React trabaja principalmente en la interfaz que utiliza el cliente, mientras que Node.js permite ejecutar la lógica del servidor. Ambos pueden trabajar juntos para construir una aplicación web.

## 4. Elección de herramientas según cada caso

### a. Un botón de chat que varias empresas pegan en sus propias páginas.

Elegiría Web Components nativos porque permiten crear un componente independiente y reutilizable que puede integrarse en diferentes páginas web. No depende de un framework específico ni necesita que las empresas instalen React, Vue o Angular. Además, Shadow DOM permite encapsular sus estilos y evitar conflictos con las páginas donde se utiliza.

### b. Una aplicación web grande para un banco, con muchos equipos de desarrollo.

Elegiría Angular porque proporciona una estructura organizada para desarrollar aplicaciones grandes. Incluye herramientas para administrar componentes, rutas, formularios y servicios, además de utilizar TypeScript. Esto facilita mantener el código organizado, distribuir responsabilidades y trabajar entre diferentes equipos de desarrollo.

## Fuentes

## Fuentes

Todas consultadas el 17 de noviembre de 2026.

1. MDN Web Docs. *Web Components.* https://developer.mozilla.org/es/docs/Web/API/Web_components
2. MDN Web Docs. *`<template>`: el elemento de plantilla de contenido.* https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/template
3. MDN Web Docs. *Usando shadow DOM.* https://developer.mozilla.org/es/docs/Web/API/Web_components/Using_shadow_DOM
4. MDN Web Docs. *Usando plantillas y slots.* https://developer.mozilla.org/es/docs/Web/API/Web_components/Using_templates_and_slots
5. web.dev. *Custom Elements v1: Reusable Web Components.* https://web.dev/articles/custom-elements-v1
6. Can I use. *Custom Elements (V1).* https://caniuse.com/custom-elementsv1
7. React (documentación oficial). *React.* https://react.dev/
8. Vue.js (documentación oficial). *Introduction.* https://vuejs.org/guide/introduction.html
9. Angular (documentación oficial). *What is Angular?* https://angular.dev/overview
10. Node.js (documentación oficial). *Introduction to Node.js.* https://nodejs.org/learn/getting-started/introduction-to-nodejs
11. npm Docs. *About npm.* https://docs.npmjs.com/about-npm/