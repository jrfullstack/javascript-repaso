

// cual es mayor metedo return
// const elMayor =(a,b)=>{
//     return (a > b) ? a : b;
// }

// console.log(elMayor(30, 20)); // 30

// reduciendo sin return
const elMayor =(a, b) => (a > b) ? a : b;
// console.log(elMayor(30, 20)); // 30


// si es miembro
const tieneMembresia = (miembro) => (miembro ? "2 Dolares" : "10 Dolares");
// console.log(tieneMembresia(true));


// en arreglos
const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    // ternario
    amigo ? 'Thor' : 'Loki',
    // funcion anonima
    (()=> 'Nick Fury')(),
    elMayor(10,15)
]

// console.log(amigosArr);


// mas de una condicion
const nota = 65;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';

console.log({nota, grado})