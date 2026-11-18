// R2 · Componente: una clase que extiende HTMLElement
class FichaMascota extends HTMLElement {

    // R3 · Atributos: lista de atributos que el componente escucha.
    static get observedAttributes() {
        return ['nombre', 'especie', 'edad', 'proxima-vacuna'];
    }

    constructor() {
        super();

        // R2 · Shadow DOM: el componente tiene su propio DOM.
        this.attachShadow({ mode:'open'});

        // R1 · Template propio:
        const plantilla = document.getElementById('plantilla-mascota');
        const copia = plantilla.content.cloneNode(true);

       // R2 · El clon se agrega dentro del Shadow DOM.
       this.shadowRoot.appendChild(copia); 
    }
}