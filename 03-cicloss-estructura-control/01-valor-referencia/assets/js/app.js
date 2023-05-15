


// por valor
// en primitivos cualquier tipo de asignacion a una variable a se lo pasamos como argumento auna funcion,
// lo estamos mandando por valor
// cuando le cambiamos el valor a una variable no afectamos el lugar en la memoria, solo cambiamos el valor
let a = 10;
let b = a;
a = 30;

// console.log({a, b});


// por referencia
// en js todos los objeto literales son pasados por referencia
// en js todos son objetos menos los primitivos
let juan = {nombre: 'Juan'};
let ana = juan;
ana.nombre = 'Ana';

// console.log({juan, ana});


const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

// primera asigacion
let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);
// console.log({peter, tony});


// ejemplos con arreglo
const frutas = ['Manzana', 'Pera', 'Piña'];

console.time("slice");
const otrasFrutas2 = frutas.slice();
console.timeEnd("slice");

console.time("spread");
const otrasFrutas = [...frutas];
console.timeEnd("spread");

otrasFrutas.push('Mango');
console.table({frutas, otrasFrutas});


// otra manera con slice
// const frutas2 = ["Manzana", "Pera", "Piña"];

// console.time("slice");
// const otrasFrutas2 = frutas2.slice();
// console.timeEnd('slice');

// otrasFrutas2.push("Mango");
// console.table({ frutas2, otrasFrutas2 });

// console.time('slice');

