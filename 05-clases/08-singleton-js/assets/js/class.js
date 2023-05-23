

// Es una instancia unica de una clase
// tener una instancia de manera global unica
// no importa en los lugare que inicie la clase con new, 
// retornara la misma instancia con los valores hasta el momento

class Singelton {

    // para saber que es un singelton,
    // esta es la instancia inicializada de mi clase
    // campos opcionales
    static instancia; // underfined
    nombre = '';

    constructor(nombre = '') {

        // ejemplo de la doble negacion
        // a = underfined;
        // console.log(a); //underfined
        // console.log(!a); //true - lo opuesto de underfined
        // console.log(!!a); //false - lo opuesto de tru

        // si es falso regresa la instancia ya creada
        if (!!Singelton.instancia) {
            return Singelton.instancia;
        }

        // this es lo que regresa el constructor por defecto
        Singelton.instancia = this;
        this.nombre = nombre;
    }
}

const instancia1 = new Singelton('Ironman');
const instancia2 = new Singelton("Spiderman");

console.log(`Nombre de la instancia1 es: ${instancia1.nombre}`);
console.log(`Nombre de la instancia2 es: ${instancia2.nombre}`);

