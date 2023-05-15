



// ciclos de repeticion
// si la condicion esta en true, siempre se repetira el ciclo hasta saturar la memoria

const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];
let i = 0;

// while (i < carros.length) {
//     console.log(carros[i]);
    
//     // i = i + 1;
//     // i += 2
//     i++;
// }


// podemos trabajar los arreglos usando la variable con la posición i
// ya q siempre q este en ture entrara en el ciclo, cuando i sea igual 4  dará `underfined` que es igual a falso
// si queremos q se salga de un ciclo usamos la palabra break
// while (carros[i]) {
//     if (i === 1) {
//         break;
//     }
//     console.log(carros[i]);
//     i++;
// } 


// si queremos que continúe al próximo ciclo después de ejecutar algo usamos continue
while (carros[i]) {
    if(i===1){
        i++;
        continue; // continuara el ciclo desde la linea 31 sin ejecutar lo de abajo
    }
    console.log(carros[i]);
    i++;
} 

console.warn('Do While')
// Do While
// la diferencia es q ejecutara el codigo interno solo 1 vez
let j = 0;
do {
    console.log( carros[j] );
    j++
} while ( carros[j] );