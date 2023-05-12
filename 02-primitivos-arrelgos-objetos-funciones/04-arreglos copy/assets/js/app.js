

// propiedades y metodos de los arreglos
// los metodos son funciones que vienen dentro de los arreglos
// las proiedades son como variables que vienen dentro de los arreglos

let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length);

// el primero
let primero = juegos[0];

// el ultimo
// dentro de las llaves podemos hacer calculos matematicos
let ultimo = juegos[juegos.length - 1];

console.log({ primero, ultimo });


// para barrer cada uno de los elementos de un arreglo podemos usar forEach()
juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr});
})

// para insertar un nuevo elemento al final del arreglo usaremos push()
// agrega un nuevo elemento al final del arreglo y retorna el numero de elementos
let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud, juegos});

// para insertar un nuevo elemento al inicio del arreglo usaremos unshift()
// agrega un nuevo elemento al inicio del arreglo y retorna el numero de elementos
nuevaLongitud = juegos.unshift("Fire Emblem");
console.log({ nuevaLongitud, juegos });

// para eliminar el ultimo elemento del arreglo usaremos pop()
// elimina el ultimo elemento y lo regresa
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});


// para eliminar un elemento en una posicion en especifico del arreglo usaremos splice()
// elimina elementos de un arreglo y si es necesario inserta nuevos elementes en su lugar,
// retorna los elementos eliminado

// posicion
let pos = 1;
// el splice necesita 2 argumentos
// 1 la posicion donde iniciara el borrado y la candidad de elementos a borrar
// en este caso apartir de la posicion 1 borrara 2 elementos
let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos})


// saber en que posicion del arreglo se encuentra un elemento indexOf()
// case sensitive
// le pasamos lo que queremos buscar y devolvera la primera que encuentre,
// por que puede que este varias veces en el arreglo
let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex});

// si regresa -1 significa que no lo encontro
// case sensitive
metroidIndex = juegos.indexOf("metroid");
console.log({ metroidIndex });