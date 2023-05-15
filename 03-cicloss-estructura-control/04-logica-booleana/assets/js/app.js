
// Not o Negacion
//podemos usar la negación en cualquier cosa que regrese un valor booleano

const regresaTrue = () => {
    console.log('Regresa true')
    return true;
};


const regresaFalse = () => {
    console.log("Regresa false");
    return false;
};


console.warn('Not o la negacion');
console.log(true); //true
// con ! hacemos la negacion para cambiar el resultado
console.log(!true); // false
console.log(!false); // true

// negando una funcion
console.log(!regresaFalse()); // true

console.log(!regresaTrue()); // false


// And - y - &&
// regresara true si todos los valores son verdaderos
console.log(true && true); // true
console.log(true && false); // false
console.log(true && !false); // true

// secuencia de ejecucion
// js leera solo el la primera funcion por que es falsa
console.log(regresaFalse() && regresaTrue());
// pero si es verdadero seguira leyendo hasta terminar o encontrar falso
console.log(regresaTrue() && regresaFalse());

regresaFalse() && regresaTrue();
regresaTrue() && regresaFalse();


// Or - o - ||
// para que una condicion regrese true solo necesita que una de las condiciones sea true
console.log(true || false); // true
// la unica condicion donde saldria falso, es si todas son falso
console.log(false || false); // false

// desde que encuentre un true no seguira ejecutando la linea, por q ya encontro el resultado final
console.log(regresaTrue() || regresaFalse()); // true
