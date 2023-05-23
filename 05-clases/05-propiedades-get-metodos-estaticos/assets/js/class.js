

class Persona {
    // propiedades estaticas
    // usamos la palabra reservada static
    // nos permiten usar las propiedades sin necesidad de instanciar la clase (sin usar la palabra new Persona)
    // la propiedad desaparece de la clase pero la podemos ver en los prototype
    static _conteo = 0;

    // igual con el metodo get
    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    // con metodos normales
    static mensaje(){
        // no podemos hacer referencias a las prpiedades normales - underfined
        console.log(this.nombre); // underfined

        console.log('Hola sony un metedo estatico')
    }

    // propiedades
    nombre = "";
    codigo = "";
    frase = "";
    comida = "";

    // constructor
    constructor(nombre = "Sin nombre", codigo = "Sin codigo", frase = "Sin frase" ) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        // aumentamos el valor de la prpiedad de la clase, cada vez que se construya una nueva persona (instancia)
        Persona._conteo++;
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

    // metodos
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

// Persona._conteo = 2;
// llamando a la propiedad estatica
console.log('Conteo estatico', Persona._conteo);

// llamando al metodo estatico get
console.log(Persona.conteo);

// llamando al metodo estatico normal
Persona.mensaje();


// podemos crear propiedades estaticas externas,
// no se recomienda pero si se puede hacer
Persona.propiedadExterna = 'Hola mundo';

console.log(Persona.propiedadExterna);
console.log(Persona)