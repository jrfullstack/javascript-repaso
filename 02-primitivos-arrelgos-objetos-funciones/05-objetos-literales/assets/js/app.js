// para declarar un objeto literal usaremos {}
// nombre es la llave
// Tony Stark el valor de la llave
// ambos juntos es propiedades

// para agregar nuevas propiedades usaremos la coma ,
// podemos agregar todo tipo de datos
let personaje = {    
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    // objeto anidado
    coords: {
        lat: 34.034,
        lng: -118.7
    },
    // arreglo
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    // para poder agregar espacios a las llaves, la colocamos dentro de comillas
    // por que no la podemos llamar personaje.ultima-pelicula,
    // por que js entendera que queremos restar las variables
    'ultima-pelicula': 'Infinity War',
};

// para llamar esa propiedad usaremos el nombre del objeto . la llave
// console.log('Nombre', personaje.nombre);
// tambien podemos usar [''] para llamar una llave
// console.log('Nombre', personaje['nombre']);

// para ver el objeto completo
// en la salida de la consola se ordenara alfabeticamente
// console.log(personaje);

// para acceder a los objetos anidados
// console.log('Coords', personaje.coords);
// console.log("Coords Latitud", personaje.coords.lat);
// console.log("Coords Longitud", personaje.coords.lng);

// para ver el numero de trajes que tiene el personaje
// console.log('Numero de trajes:', personaje.trajes.length);

// para ver el ultimo traje
// console.log("Ultimo trajes:", personaje.trajes[personaje.trajes.length - 1]);

// para acceder a valores usando variables
// let x = 'vivo';
// console.log('Vivo:', personaje[x]);
