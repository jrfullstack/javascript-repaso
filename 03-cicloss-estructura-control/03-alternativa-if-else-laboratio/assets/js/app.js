

// tarea
// sin usar if else o swtich, unicamente objetos o arreglos

let dia = 3;

const diaLetras = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
};

// si el numero introducido es mayor a 6 o menor de 0 se ejecutara 'El dia no es valido'
// || esto es un o, ejecuta esto si esta true o esto si esta false
console.log(diaLetras[dia] || 'El dia no es valido');

const diaLetrasArreglo = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
];

console.log(diaLetrasArreglo[dia] || "El dia no es valido");
