

const jrey = {
    nombre: 'Jimmy',
    edad: 30,
    imprimir(){
        // esto no funcionara por q nombre no esta dentro del scope, fuera
        // console.log(`Nombre: ${nombre}`)

        // errores comunes, este solo funcionaria en esta clase
        // console.log(`Nombre: ${jrey.nombre}`);

        // la forma correcta es usando la palabra this
        // q se refiere a esta clase
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const agon = {
    nombre: "Andrea",
    edad: 32,
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    },
};

jrey.imprimir();


// para la version 5 de ESMA Script esta era la solucion
function Persona(nombre, edad){
    console.log('Se ejecuto esta linea')
    this.nombre = nombre;
    this.edad   = edad;
    this.imprimir= function() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

// para crear una nueva instancia de persona usamos new
const maria = new Persona('Maria', 18);
const melissa = new Persona("Melissa", 35);
maria.imprimir();
melissa.imprimir();