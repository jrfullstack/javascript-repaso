

class Persona {
    // propiedades estaticas
    static _conteo = 0;

    // igual con el metodo get
    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    // con metodos normales
    static mensaje(){

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
        
        Persona._conteo++;
    }

    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){
        return `La comida favorita de ${this.nombre} es ${this.comida}`

    }

    // metodos
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {

        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
}

// Podemos usar una clase ya definida para extenderla con todos sus propiedades y métodos, para así poder agregarle otros atributos nuevos
// lo hacemos usando la palabra reservada `externds`
class Heroe extends Persona {

    // nueva propiedad
    clan = 'sin clan'

    // constructor de la sub clase
    constructor(nombre, codigo, frase) {
        // necesitamos llamar el constructor de la clase padre con super()
        // debemos llamar siempre el constructor padre antes de inicializar cualquier propiedad con this
        super(nombre, codigo, frase);

        // luego del super iniciamos nuestras propiedades
        this.clan = 'Los Avengers'
    }

    // podemos usar los mismo nombres de los metodos de la clase padre
    // como tambien podemos llamarlos
    quienSoy() {
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        // llamamos el mismo metodo pero del padre
        super.quienSoy();
    }


}

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman');
// const spiderman = new Heroe();
console.log(spiderman)

// podemos llamar tambien los mismo metodos q se extendieron de Persona
spiderman.quienSoy();