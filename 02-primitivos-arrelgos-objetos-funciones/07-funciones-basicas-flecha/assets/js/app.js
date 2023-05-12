


// un metodo es un funcion que se encuentra dentro de una funcion
// los argumentos son los parametros q les mandamos a las funciones
// es buena practica que las funciones esten declaradas antes de llamarlas

// para declara funciones tradicionales usamos la palabra function
function saludar(nombre) {
    console.log("Hola " + nombre);
}

// para llamar una funcion siempre usaremos los ()
// saludar('Jimmy');


// para declarar una funcion anonima, porque despues de funcion no tiene el nombre
// pero se a asignado a una variable que va a responder por esa funcion anonima
const saludar2 = function(nombre){
    console.log('Hola ' + nombre);
}

// saludar2("Jimmy");



// podemos enviarle varios argumentos y la funcion solo tenga uno definido,
// tambien podemos ver todos los argumentos que recibe una funcion
function saludar(nombre) {
    console.log(arguments)
    console.log("Hola " + nombre);
}

// saludar("Jimmy", 40, true, 'Cuba');



// funciones de flechas estan a partir del esma6
// la declaramos de esta manera
// const saludarFlecha = (nombre) => {
//     console.log('Hola ' + nombre)
// }

// tambien podriamos mandar el argumento sin los parentesis
// pero es buena practica poner los parentesis
const saludarFlecha = nombre => {
    console.log('Hola ' + nombre)
}