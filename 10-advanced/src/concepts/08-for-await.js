import { heroes } from "../data/heroes";
/**
 *
 * @param {HTMLDivElement} element
 */
export const forAwaitComponent = async (element) => {    

    // mapiamos nuestro arreglo de heroes y sacamos los id
    const heroIds = heroes.map(hero => hero.id);

    // con la funcion getHeroesAsync objetenemos el nombre del arreglo heroIds
    const heroPromises = getHeroesAsync(heroIds);

    // con el for await barremos el arreglo e imprimimos el name
    for await ( const hero of heroPromises ){
        element.innerHTML += `${hero.name} <br>`
    }
};


// esta funcion regresa un arreglo de heroes
/**
 *
 * @param {Array<String>} heroIds
 * @returns {Array<Promise>}
 */
const getHeroesAsync = (heroIds) => {
    const heroPromises = [];

    heroIds.forEach((id) => {
        heroPromises.push(getHeroAsync(id));
    });

    return heroPromises;
};

// esta funcion regresa un hero por un id
const getHeroAsync = async (id) => {
    await new Promise((resolve) => {
        setTimeout(() => resolve(), 1000);
    });

    return heroes.find((hero) => hero.id === id);
};
