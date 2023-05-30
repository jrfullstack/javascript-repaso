import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const promiseComponent = (element) => {
    
    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }

    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `
        <h3>${hero1.name}</h3>
        <h3>${hero2.name}</h3>
        `;
    };

    const renderError = (error) => {
        element.innerHTML = `
            <h3>${error}</h3>
        `;
    }

    const id1 = "5d86371f9f80b591f499df32";
    const id2 = "5d86371fd55e2e2a30fe1ccb1";

    
    //! Promise.all
    // podemos usar esta manera cuando los resultado son independientes
    // con all mandamos como arreglo las veces que necestiamos ejecutar las funcion
    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
    // devuelve un arreglo
    // y lo podemos desestructurar
    .then(([hero1, hero2]) => renderTwoHeroes(hero1, hero2))
    // con q 1 de error cae en el catch
    .catch(renderError);
};

/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = (id) => {

    // creamos un new Promise q espera un callback con 2 argumentos
    // resolve, si se resuelve correctamente la peticion
    // reject si la peticion regresa un error
    return new Promise((resolve, reject) => {

        const hero = heroes.find(hero => hero.id === id);

        // si encuentra el hero
        if (hero) {
            // el resolve no detiene la ejecucion
            resolve(hero);

            // para detener la ejecucion usamos el return vacion
            return;
        }

        // pero si no encuentra el hero
        // podemos dejar el llamado a la funcion vacio
        // pero tambien podemos especificar el error
        reject(`Hero with id: ${id} not found`);

        return promise;
    });

}