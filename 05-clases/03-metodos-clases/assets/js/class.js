

class Persona {
    // propiedades
    nombre = '';
    codigo = '';
    frase = '';

    // constructor
    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase
    }

    // metodo
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`)
    }

    miFrase() {
        // llamando un meteodo dentro de otro
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`)
    }
}

// pasandole arumento a las nuevas instancias
const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');
console.log(spiderman);
console.log(ironman);

// llamando al metodo
spiderman.miFrase()
ironman.miFrase();