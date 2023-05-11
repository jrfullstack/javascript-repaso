//Es un contenedor de una información que apunta a un lugar en memoria.
//Dicha información puede cambiar en el futuro.

// Para declarar una variable por primeta vez usaremos 3 tipos
// let, var, const
// podemos declararla sin usar las 3 condiciones pero es mala practica


// con let declaramos una variable en su entorno de trabajo
let a = 10;
// reasiganmos un nuevo valor a la variable
a = 20;

// con var declaramos una variable de forma global
// para hoy en dia no se recomienda usar var
var b = 10;
// reasiganmos un nuevo valor a la variable
b = 20;

// con const declaramos una variable que podra ser modificada
const c = 10;
// reasiganmos un nuevo valor a la variable pero en const esto no se puede hacer
c = 20;

// para declarar multiples variables en una sola linea, usaremos coma para serar cada variable y su asignacion
let d = 10, e = 30, f = 50, x = d + e;

// tambien si hay una coma o un punto js entendera que el codigo sigue como si fuera una sola linea
let n = 10,
    m = 30,
    o = 50,
    p = d + e;
