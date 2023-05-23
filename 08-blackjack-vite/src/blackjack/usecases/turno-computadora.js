import { pedirCarta, valorCarta, crearCartaHTML } from "./";


/**
 * turno de la computadora
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos 
 * @param {HTMLElement} divCartasComputadora elemento HTML para mostrar las cartas
 * @param {Array<String>} deck 
 */
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {

    if (!puntosMinimos) throw new Error('Puntos minimos son necesarios');
    if (!puntosHTML) throw new Error("Argumento puntosHTML es necesario");

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;

        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;
        }
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    setTimeout(() => {
        if (puntosMinimos === puntosComputadora) {
            alert("Tablas!!");
        } else if (
            (puntosMinimos > puntosComputadora && puntosMinimos <= 21) ||
            puntosComputadora > 21
        ) {
            alert("Ganaste!!!");
        } else if (
            (puntosMinimos < puntosComputadora && puntosComputadora <= 21) ||
            puntosMinimos > 21
        ) {
            alert("Perdiste!!!");
        }
    }, 500);
};
