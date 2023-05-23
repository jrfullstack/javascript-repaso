

// class Persona {

//     // el constructor es un metodo q se ejecuta cuando se crear una nueva instancia
//     constructor(){
//         console.log('Hola!')

//         // es el unico metodo q no retorna underfind aunque lo tenga esplicitamente puesto
//         return undefined;
//     }
// }

// const spiderman = new Persona();
// console.log(spiderman);


class Persona {
    nombre = '';
    codigo = '';
    frase = '';


    // inicializar las propiedades en el constructor
    // se la pasamos como argumento al constructor
    // podemos pasarles valores por defecto
    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase
    }
}

// pasandole arumento a las nuevas instancias
const spiderman = new Persona('Peter Parker', 'Spiderman', 'Soy tu amigable vecino spiderman');
const ironman = new Persona('Tony Stark', 'Ironman', 'Yo soy Ironman');
console.log(spiderman);
console.log(ironman);