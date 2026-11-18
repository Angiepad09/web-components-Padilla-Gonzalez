# Web Components · Ficha de mascota

Actividad evaluativa: Web Components, HTMLTemplates y frameworks.

## Integrantes

- Angie Padilla Galvis (GitHub: `Angiepad09`)
- Yurly Gonzalez Dulcey (GitHub: `ingyurlygonzalezdulcey-creator`)

## Caso elegido

**Ficha de mascota para una veterinaria.** El componente `<ficha-mascota>` muestra el
nombre, la especie, la edad y la fecha de la próxima vacuna de cada paciente. También
tiene un espacio libre (slot) para las observaciones del veterinario.

## Estructura del repositorio

| Archivo | Contenido |
|---|---|
| `README.md` | Este archivo |
| `INVESTIGACION.md` | Partes 1 y 2 |
| `index.html` | El `<template>` y las 3 instancias del componente |
| `js/main.js` | La clase del componente, comentada por requisito (R1 a R5) |
| `css/styles.css` |

## Cómo probar el componente

1. Clonar o descargar el repositorio.
2. Abrir `index.html` en el navegador con la extensión Live Server de VS Code.
3. Se deben ver 3 fichas: Luna, Michi y Coco, cada una con sus datos y su nota.
4. Abrir la consola (F12) y comprobar que no hay errores.

## Uso del componente

```html
<ficha-mascota nombre="Luna" especie="Perro" edad="3" proxima-vacuna="2026-12-05">
  <p slot="nota">Alérgica al pollo.</p>
</ficha-mascota>
```

| Atributo | Ejemplo | Descripción |
|---|---|---|
| `nombre` | `Luna` | Nombre de la mascota |
| `especie` | `Perro` | Especie |
| `edad` | `3` | Edad en años |
| `proxima-vacuna` | `2026-12-05` | Fecha en formato AAAA-MM-DD |
| `slot="nota"` | `<p slot="nota">…</p>` | Observación libre (opcional) |

## Declaración de uso de IA

Usamos Claude como apoyo para organizar la investigación, encontrar fuentes oficiales y revisar el componente. Revisamos el contenido, y podemos explicar cada parte cómo se clona dentro del Shadow DOM, cómo funcionan los atributos observados, y por qué Node.js es un entorno de ejecución y no un framework.
