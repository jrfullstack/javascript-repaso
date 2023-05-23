


/**
 * Esta funcion me permite tomar una carta
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} retorna una carta
 */
export const pedirCarta = (deck) => {
    // validacion si ya no hay mas cartas
    if (!deck ||deck.length === 0) {
        throw "No hay cartas en el deck";
    }

    // eliminamos la ultima carta y la retornamos
    return deck.pop();
};
