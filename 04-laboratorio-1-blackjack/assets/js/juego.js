/*
    2C = Two Clubs (Trebloes)
    2D = Two Diamonds (Diamantes)
    2H = Two Hearts (Corazones)
    2S = Two Spades (Espadas)   
    las figuras J, Q, K valen 10 y las As valen 11
*/

// funcion anonima autoinvocada
// con funcion de flecha
//lo que hace es crear una capsula en memoria sin nombre lo que hace imposible llamarla
const miModulo = (() => {
    'use strict'
    
    let deck         = [];
    const tipos      = ["C", "D", "H", "S"],
          especiales = ["A", "J", "Q", "K"];

    let puntosJugadores = [];

    // referencias html
    const btnPedir = document.querySelector("#btnPedir"),
          btnDetener = document.querySelector("#btnDetner"),
          btnNuevo = document.querySelector("#btnNuevo");

    const divCartasJugadores = document.querySelectorAll(".divCartas"),
          puntosHTML = document.querySelectorAll("small");

    //  funcion para inicializar el juego
    const inicializarJuego = (numJugadores = 2) => {
        // creamos las cartas barajadas
        deck = crearDeck();

        // limpiamos los puntos
        puntosJugadores = [];

        // la cantidad de jugadores
        for(let i = 0; i < numJugadores; i++){
            puntosJugadores.push(0);
        }

        puntosHTML.forEach( elem => elem.innerText = 0 );
        divCartasJugadores.forEach((elem) => (elem.innerText = ''));

        btnPedir.disabled   = false;
        btnDetener.disabled = false;
    }

    // esta funcion crear una nueva baraja
    const crearDeck = () => {
        // vaciamos el deck
        deck = [];

        // creamos las barajas del 2 al 10
        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo);
            }
        }
        // y luego le ponemos el tipo a cada una
        for (let tipo of tipos) {
            for (let esp of especiales) {
                deck.push(esp + tipo);
            }
        }

        // retornamos las cartas barajadas
        return _.shuffle(deck);
    };
    

    // esta funcion me permite tomar una carta
    const pedirCarta = () => {
        // validacion si ya no hay mas cartas
        if (deck.length === 0) {
            throw "No hay cartas en el deck";
        }

        // eliminamos la ultima carta y la retornamos
        return deck.pop();
    };

    // funcion del valor que contiene la carta
    // resibe la carta a evaluar
    // los string pueden ser trabajados como un arreglo (orden de las letras)
    const valorCarta = (carta) => {
        // cortamos desde 0 hasta el total del string - 1
        // quitamos la ultima letra q son los tipos
        const valor = carta.substring(0, carta.length - 1);
        return isNaN(valor) ? (valor === "A" ? 11 : 10) 
                            : valor * 1;
    };

    // Turno 0 = primer jugador
    // Ultimo turno = a la computadora
    const acumularPuntos = (carta, turno) => {
        // sumamos los puntos del jugados
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        // agregamos a la pagina los puntos del jugador
        puntosHTML[turno].innerText = puntosJugadores[turno];

        return puntosJugadores[turno];
    }

    const crearCarta = (carta, turno) => {

        const imgCarta = document.createElement("img");
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add("carta");
        divCartasJugadores[turno].append(imgCarta);
    }

    const determinarGanador = () => {

        const [puntosMinimos, puntosComputadora] = puntosJugadores;

        setTimeout(() => {
            if (puntosMinimos === puntosComputadora) {
                alert("Tablas!!");
            } else if (
                (puntosMinimos > puntosComputadora && puntosMinimos <= 21) ||
                puntosComputadora > 21
            ) {
                alert("Ganaste!!!");
            } else if (
                (puntosMinimos < puntosComputadora &&
                    puntosComputadora <= 21) ||
                puntosMinimos > 21
            ) {
                alert("Perdiste!!!");
            }
        }, 100);
    }

    // turno de la computadora
    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;
        do {
            // nuestra carta nueva
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta,puntosJugadores.length - 1);

            crearCarta(carta, puntosJugadores.length - 1);
            
        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));  
        
        determinarGanador();
    };

    // Eventos
    // boton pedir
    btnPedir.addEventListener("click", () => {
        // nuestra carta nueva
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);

        crearCarta(carta, 0);

        // validamos los puntos del jugados y desactivamos el boton de pedir carta
        if (puntosJugador > 21) {
            console.warn("Lo siento haz perdido!");
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        } else if (puntosJugador === 21) {
            console.warn("21, genial!!");
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
    });

    // boton detener
    btnDetener.addEventListener("click", () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0]);
    });

    // btnNuevo.addEventListener("click", () => {
        
    //     console.clear();
    //     inicializarJuego();
        
    // });

    return {
        nuevoJuego: inicializarJuego
    }

})();



