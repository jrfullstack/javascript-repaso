

// retornar objetos
// function crearPersona (nombre, apellido) { 
//     return {
//         nombre:nombre,
//         apellido:apellido
//     }
// }

// si queremos retornar un objeto y la llave y el valor tienen el mismo nombre,
// basta solo poner el nombre de la propiedad 

// function crearPersona(nombre, apellido) {
//     return {
//         nombre,
//         apellido,
//     };
// }

// usando una funcion de flecha simplificada
const crearPersona = (nombre, apellido) => ({nombre, apellido});

const persona = crearPersona("Jimmy", "Reyes");
// console.log(persona);


// manejando los argumentos
// en las funciones tradicionales viene por defecto arguments
function imprimiendoArgumentos (){
    console.log(arguments)
}
// console.log(imprimiendoArgumentos(10, true, false, 'jimmy', 'hola'))

// para las funciones de flechas necesitamos ...
// depues del parametro no puede venir nada mas
const imprimiendoArgumentosFlecha = (...arguments) => {
    console.log(arguments);
};
// console.log(imprimiendoArgumentosFlecha(10, true, false, "jimmy", "hola"));


// podemos extraer los primero argumentos y despues el resto
const imprimiendoArgumentosFlecha2 = ( edad,...arguments) => {
    console.log({edad, arguments});
};
// console.log(imprimiendoArgumentosFlecha2(10, true, false, "jimmy", "hola"));

// definimos la funcion
const imprimiendoArgumentosFlecha3 = (...arguments) => {
    // console.log({ arguments });
    // retornamos los argumentos
    return arguments;
};
// aguardamos en una variables el arreglo de argumentos
const argumentos = (imprimiendoArgumentosFlecha3(10, true, false, "jimmy", "hola"));
// console.log(argumentos)

// y podemos desestructurar los argumentos
const [edad, vivo, nombre, saludo] = (imprimiendoArgumentosFlecha3(10, true, "jimmy", "hola"));
// console.log({ edad, vivo, nombre, saludo });


// tambien con los objetos
// si tiene variables con nombre la podemos pedir sin importar el nombre
// tambien podemos cambiar el nombre
const crearPersona2 = (nombre, apellido) => ({ nombre, apellido });

// destructuramos y podemos cambiar el nombre
const {apellido: nuevoApellido } = crearPersona("Jimmy", "Reyes");
// console.log({nuevoApellido});


// tambien podemos desestructurar los argumentos y asiganarle valores por defectos
let tony = {
    nombre: "Tony Stark",
    codeName: "Ironman",
    vivo: false,
    // edad: 40,    
    trajes: ["Mark I", "Mark V", "Hulkbuster"],    
};

// funcion con fines educativos
const imprimePropiedades = ({nombre, codeName, vivo, edad=0, trajes}) => {
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(tony);