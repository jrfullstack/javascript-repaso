

// si la funcion no tiene el return, la funcion retornara undefined
const saludarFlecha = (nombre) => {
    console.log("Hola " + nombre);
    return 1;
};
// const retornoSaludar = saludarFlecha('Jimmy');
// console.log(retornoSaludar)

// lo que este despues del return no se ejecutara, sale de la funcion
const saludarFlecha2 = (nombre) => {
    return 1;
    console.log('Esto nunca se ejecutara');
};



// podemos retornar cualquier cosa, como objetos arreglos, variables
// pero si ponemos numero separados por coma no retornara lo esperado
const saludarFlecha3 = (nombre) => {
    return [1,2];
};
saludarFlecha3();
const retornoSaludar = saludarFlecha3("Jimmy");
// console.log(retornoSaludar)

// retornar sumas de 2 argumentos
function sumar(a , b){
    return a + b;
}
// le damos a la funcion 2 valores a sumar
// console.log(sumar(1, 2))

// simplificar un retorno en una funcion de flecha,
// si solo necesitas retorna algo, sin mas codigo
const sumar2 = (a,b) => a + b;
// console.log(sumar2(1, 2));

// numeros aleatorios
const getAleatorio = () => Math.random();
console.log(getAleatorio())