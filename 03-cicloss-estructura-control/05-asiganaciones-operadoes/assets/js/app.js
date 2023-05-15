

console.log('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

// Asignara el ultimo valor true encotrado o con contenido
const a1 = true && 'Hola mundo'; // hola mundo

const a2 = true && "Hola mundo" && 150; // 150

const a3 = false && "Hola mundo" && 150; // false

const a4 = 'Hola' && 'Mundo'; // Mundo

// en este caso no es que se le asigne el valor de falso
// sino es q devuelve falso por que hay una condicion falsa
const a5 = 'Hola' && 'Mundo' && soyFalso && true; // false


// o ||
const a6 = soyFalso || 'Ya no soy falso'; // 'Ya no soy falso'
const a7 = soyFalso || soyUndefined || soyNull || "Ya no soy falso de nuevo"; //"Ya no soy falso de nuevo"
const a8 = soyFalso || soyUndefined || soyNull || true ||  "Ya no soy falso de nuevo"; //true

// es comun verlo en los if else
if (soyFalso || soyUndefined) {
    console.log('Hacer una cosa')
} else {
    console.log('Hacer otra cosa')
}