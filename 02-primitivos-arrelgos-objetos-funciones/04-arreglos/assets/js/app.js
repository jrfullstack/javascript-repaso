
// Los arreglos son un objeto muy parecido a una lista de informacion, 
// que contienen un grupo de elementos
// los arreglos empiezan con la posicion 0
// los [] nos indican que es un arreglo


// Arrglos muy poco comun de ver
// iniciamos un arreglo con la expresion new Array y que va a contener 10 objetos
// const arr = new Array(10);
// console.log(arr);

// Arreglos tradicionales
// no es exactamente lo mismo de arriba, por que aqui es un arreglo vacio
// const arr2 = [];
// console.log(arr2);

// para agregar elementos debemos se parar por coma
// let videoJuegos = ['Mario 3', 'Megaman', 'Gran Turismo 7'];
// console.log({videoJuegos});

// para acceder a elemento de la lista, escribimos el nombre seguido de las llaves y el numero
// console.log(videoJuegos[0]);
// console.log(videoJuegos[1]);
// console.log(videoJuegos[2]);

// normalmente contienen el mismo tipo de datos, pero en js es indiferente
// tambien podemos agregar comentarios dentro
let arregloCosas = [
    // boolean
    true,
    // numeros
    123,
    //string
    'Jimmy',
    // operaciones matematicas
    1 + 2,
    // funciones tradicionales
    function(){},
    // funciones de flecha
    ()=>{},
    // objetos
    {a:1},
    // arrelgos anidados
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Willy',
        'Woodman'
    ]]
];
// console.log({arregloCosas});
console.log(arregloCosas[7][4][1]);