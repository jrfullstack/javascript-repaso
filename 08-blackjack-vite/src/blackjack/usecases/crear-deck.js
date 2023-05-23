import _ from "underscore";


// JSDoc - mejorando los tipos de datos que manejara nuestro modulo
/**
 * Esta funcion crear un nuevo arreglo de cartas
 * @param {Array<String>} tiposDeCartas Ejemplo: ["C", "D", "H", "S"]
 * @param {Array<String>} tiposEspeciales Ejemplo: ["A", "J", "Q", "K"]
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {

    // validando los tipos de datos q recibimos
    if(!tiposDeCartas || tiposDeCartas.length === 0) 
        throw new Error('tiposDeCartas es obligatorio como un arreglo de string');
        
    if(!tiposEspeciales || tiposEspeciales.length === 0) 
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

    // vaciamos el deck
    let deck = [];

    // creamos las barajas del 2 al 10
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCartas) {
            deck.push(i + tipo);
        }
    }
    // y luego le ponemos el tipo a cada una
    for (let tipo of tiposDeCartas) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }

    // retornamos las cartas barajadas
    return _.shuffle(deck);
};

