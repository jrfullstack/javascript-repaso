// mas informacion
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object

const personaje = {
    nombre: "Tony Stark",
    codeName: "Ironman",
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.7,
    },
    trajes: ["Mark I", "Mark V", "Hulkbuster"],
    direccion: {
        zip: "10880, 90265",
        ubicacion: "Malibu, California",
    },
    "ultima-pelicula": "Infinity War",
};


// para eliminar una propiedad de un objeto usaremos delete
delete personaje.edad;
// console.log(personaje);

// para convertir en arreglo el objeto personaje y dentro varios arreglos con cada propiedad
// esta aparecen en el nombre que fueron creados y no alfabeticamente
const entriesPares = Object.entries(personaje);
// console.log(entriesPares);

// para agregar una nueva propiedad, simplemente la definimos de esta manera
personaje.casado = true;
// console.log(personaje);

// si usamos const para la creacion del objeto, este solo evitara q se cambie el nombre o valor de la variable
// personaje = true;
// personaje = {};

// pero si permitira agregacion de propiedades y modificaciones
// delete personaje.edad;
// personaje.casado = true;

// para bloquear las modificaciones de las propiedades
Object.freeze(personaje);
// si intentamos agregar una nueva propiedad a personaje, no lo insertara
personaje.dinero = 1000000000;
// console.log(personaje);
// pero si intentamos cambiar un objeto anidado si lo pemitira, tendriamos que bloquearlo tambien
Object.freeze(personaje.direccion);


// para saber la lista de propiedades que tiene un objeto
const propiedades = Object.getOwnPropertyNames(personaje);
// console.log(propiedades);

// para saber los valores de las llaves
const valores = Object.values(personaje);
console.log(valores);
