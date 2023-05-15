/*
    Dias de semana abrimos a las 11
    pero los fines de semana abrimos a las 9
*/

// Entra a un sitio web, para consultar si esta abierto hoy

const dia = 0;
const horaActual = 8;


let horaApertura;
let mensaje;

// if (dia === 0 || dia === 6) {
// podemos resumir usando la funcion includes de arreglos
// if ([0,6].includes(dia)) {
//     console.log("Fin de semana");
//     horaApertura = 9;
// } else {
//     console.log("Dia de semana");
//     horaApertura = 11;
// }

// if (horaActual >= horaApertura) {
//     mensaje = 'Esta abierto';
// } else {
//     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
// }

// console.log({horaApertura, mensaje})



// resumiendo con operadores ternarios
// si 0 y 6 esta en el arreglo toma el 9 sino estan toma el 11
horaApertura = ( [0,6].includes(dia) ) ? 9 : 11;
mensaje =
    horaActual >= horaApertura
        ? "Esta abierto"
        : `Esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaApertura, mensaje});
