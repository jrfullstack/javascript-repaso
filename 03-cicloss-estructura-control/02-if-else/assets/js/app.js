

// no entrara en el if por que a no es mayor q 10
// let a = 5;

// if (a > 10) {
//     console.log('A es mayor a 10')
// }

// console.log('Fin del programa');


// si entrara en el if por q a es menor q 10
// let a = 5;

// if (a < 10) {
//     console.log('A es mayor a 10');
// }

// console.log('Fin del programa');


// no entrara en el if por q a no es mayor q 10, es igual
// let a = 10;

// if (a > 10) {
//     console.log('A es mayor a 10');
// }

// console.log('Fin del programa');


// si entrara en el if por q a es igual a 10
// let a = 10;

// if (a >= 10) {
//     console.log('A es mayor o igual 10');
// }

// console.log('Fin del programa');


// else
// let a = 9;

// if (a >= 10) {
//     console.log("A es mayor o igual 10");
// } else {
//     console.log('A es menor a 10');
// }

// console.log("Fin del programa");


// const hoy = new Date();
// let dia = hoy.getDay(); //0 - domingo, 1 - lunes ........

// console.log({dia});

// if (dia === 0) {
//     console.log('Hoy es domingo');
// } else {
//     console.log("Hoy no es domingo");    
// }


// explicando las comparaciones dentro del parentesis del if
// un = es una asiganacion o darle un valor a una variable, para condiciones nunca usar esto, error comun
// dos == es comparando si el dia contiene como valor 0 sin importar el tipo (numero, string, boolean...)
// tres === es una comparacion incluyendo los tipos


// else if
// podemos usar else if para continuar agregando mas condicion
// const hoy = new Date();
// let dia = hoy.getDay(); //0 - domingo, 1 - lunes ........

// console.log({ dia });

// if (dia === 0) {
//     console.log("Hoy es domingo");
// } else if (dia === 1) {
//     console.log("Hoy es Lunes");

// } else if (dia === 0) {
//     console.log("Hoy es Martes");
// } else {
//     console.log("Hoy no es domingo, ni lunes, ni martes");
// }


const hoy = new Date();
let dia = hoy.getDay(); //0 - domingo, 1 - lunes ........

console.log({ dia });

if (dia === 0) {
    console.log("Hoy es domingo");
} else {
    if(dia === 1){
    console.log("Hoy es Lunes");
    }else {
        console.log('Hoy no es lunes ni domingo')
    }
}