// R2 · Componente: una clase que extiende HTMLElement
class FichaMascota extends HTMLElement {

    // R3 · Atributos: lista de atributos que el componente escucha.
    static get observedAttributes() {
        return ['nombre', 'especie', 'edad', 'proxima-vacuna'];
    }

    constructor() {
        super();

        // R2 · Shadow DOM: el componente tiene su propio DOM.
        this.attachShadow({ mode: 'open' });

        // R1 · Template propio:
        const plantilla = document.getElementById('plantilla-mascota');
        const copia = plantilla.content.cloneNode(true);

        // R2 · El clon se agrega dentro del Shadow DOM.
        this.shadowRoot.appendChild(copia);
    }

    connectedCallback() {
        this.render();
    }

    // R3 · Si un atributo cambia la ficha se actualiza.
    attributeChangedCallback() {
        this.render();
    }

    // R1 y R3: Rellena los marcadores vacíos del template con los atributos.

    render() {
        const nombre = this.getAttribute('nombre') || 'Sin nombre';
        const especie = this.getAttribute('especie') || 'No registrada';
        const edad = this.getAttribute('edad');
        const vacuna = this.getAttribute('proxima-vacuna');

        this.campo('nombre').textContent = nombre;
        this.campo('especie').textContent = especie;
        this.campo('edad').textContent = this.formatearEdad(edad);
        this.campo('vacuna').textContent = this.formatearFecha(vacuna);
    }

    campo(nombreCampo) {
        return this.shadowRoot.querySelector(`[data-campo="${nombreCampo}"]`);
    }

    formatearEdad(edad) {
        if (!edad) return 'No registrada';
        const numero = Number(edad);
        return numero === 1 ? '1 año' : `${numero} años`;
    }

    formatearFecha(textoFecha) {
        if (!textoFecha) return 'Sin programar';
        const [anio, mes, dia] = textoFecha.split('-').map(Number);
        const fecha = new Date(anio, mes - 1, dia);
        if (Number.isNaN(fecha.getTime())) return textoFecha;
        return fecha.toLocaleDateString('es-CO', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    }
}

// R2 · Registro: el nombre lleva guion, como exige el estándar.
customElements.define('ficha-mascota', FichaMascota);