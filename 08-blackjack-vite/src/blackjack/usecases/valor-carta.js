


// 
// 
// los string pueden ser trabajados como un arreglo (orden de las letras)
/**
 * funcion del valor que contiene la carta
 * @param {String} carta recibe la carta a evaluar
 * @returns {Number} retorna un numero, valor de la carta
 */
export const valorCarta = (carta) => {
    // cortamos desde 0 hasta el total del string - 1
    // quitamos la ultima letra q son los tipos
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) 
                        : valor * 1;
};