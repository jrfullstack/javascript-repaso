// Aunque ya no son muy usadas hoy en día, por que ya hay muchas librerías que manejan esto de manera mas controladas y bonitas, es importante conocerlas



// el alert nos aparecera en la parte de arriba del navegador con el mensaje que le pngamos y hasta no hacer click en aceptar no continuara la ejecucion
// esta es una instruccion que bloquea la ejecucion del navegador web, hasta que no se haga click
// alert('Hola mundo');


// el prompt es un alert pero con un input donde podemos solicitar informacion al usuario
// sin almacenar informacion
// prompt('Cual es tu nombre?', 'Sin nombre');

// el primer argumento es lo que le salda de primero y el segundo aparecera como un placeholder deontro del input, no es obliatorio
// prompt('Cual es tu nombre?', 'Sin nombre');


// para almacenar la informacion en una variable
// si el usuario cancela, retorna null y si acepta sin rellenar retorna un string vacio y si rellena el input retornara un string
// let nombre = prompt("Cual es tu nombre?");
// console.log(nombre);

// con el confirm le estamos preguntando al usuario si quiere o no hacer algo, las opciones son cancelar o aceptar
// su retorno sera un buleano
const seleccion = confirm('Estas seguro de borrar esto??');
console.log(seleccion);