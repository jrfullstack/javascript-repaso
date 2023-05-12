

// tipos de declaraciones y modificaciones de una variable
// string
let nombre = 'Peter Parker';
console.log(nombre);

// comillas simples, es mas ligero que el de comilla doble
nombre = 'Ben parker';
console.log(nombre);

// comillas dobles
nombre = "Tia May";

// back tips
nombre = `Tia May`;

// para saber de que tipo es el contenido de una variable
console.log(typeof nombre);

// mutando el tipo string a numero
nombre = 123;
console.log(typeof nombre);


// Booleanos
//true - false en minúscula sino js intentara buscar una variable llamada True o False
let esMarvel = true;
console.log(typeof esMarvel);


// Number
// No hay diferencia si es decimal o entero, siempre será number
let edad = 33;
console.log(typeof edad);

let edad_2 = 45.25458;
console.log(typeof edad_2);


//Undefined
// camelcase
// recomendando en js
let superPoder;
// no tiene asignado ningun valor
console.log(typeof superPoder);


//snakecase
// no es tan comun en js
// let super_poder


// Null
// sale que es un objet
let soyNull = null;
console.log(typeof soyNull);



// Symbol
let symbol1 = Symbol('a');
console.log(typeof symbol1);

let symbol2 = Symbol('a');
console.log(symbol1 === symbol2);

