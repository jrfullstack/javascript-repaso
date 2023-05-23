

class Persona {
    // propiedades
    nombre = "";
    codigo = "";
    frase = "";
    comida = "";

    // constructor
    constructor(
        nombre = "Sin nombre",
        codigo = "Sin codigo",
        frase = "Sin frase"
    ) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

    // Sets - Para establecer valores
    // necesita tener 1 propieda con la q trabajar
    // el metodo no puede tener el mismo nombre q la propiedad, ciclo infinito
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    // Gets - Para recuperar valores
    // no puede tener parametros
    // no podemos llamar la misma propiedad get dentro, ciclo infinito
    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`

    }

    // metodo
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        // llamando un meteodo dentro de otro
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

// pasandole arumento a las nuevas instancias
const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');
// console.log(ironman);

// llamando al metodo
spiderman.miFrase();

// utilizando el set
spiderman.setComidaFavorita = 'El pie de cereza de la tia May';

// spiderman.comida = 'Duende verde'
// spiderman.namesis = 'Duende verde'

// llamando el meotodo get
console.log(spiderman.getComidaFavorita)



console.log(spiderman);