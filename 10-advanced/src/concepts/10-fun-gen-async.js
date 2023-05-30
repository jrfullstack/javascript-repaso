import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const generatorAsyncComponent = async(element) => {
    
    // obtenemos el valor de la funcion generadora
    const heroGenerator = getHeroGenerator();
    // creamos la variable para el ciclo q tendra el valor del done de la funcion generadora
    let isFinished = false;

    // creamos el ciclo q nos mostrara el valor
    do {
        // hacemos el await de la funcion
        const {value, done} = await heroGenerator.next();
        // le pasamos el valor del done
        isFinished = done;

        // si ha terminado salimos
        if(isFinished) break;

        element.innerHTML = value;
    } while (!isFinished);
    
};

// funcion generadora q obtendra cada hero
async function* getHeroGenerator(){
    for(const hero of heroes){
        await sleep();
        yield hero.name;
    }

    // para evitar el underfined
    return 'No hay mas';
}


// funcion q se ejecutara cada segundo
const sleep = ( ) => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 500);
    })
}