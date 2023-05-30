import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncComponent = (element) => {

    const id1 = "5d86371fd55e2e2a30fe1cc4";
    console.log('Inicio de componente');

    findHero(id1)
        .then((name) => (element.innerHTML = name))
        .catch((error) => (element.innerHTML = error));
    
    console.log('Fin del component')
    
};

/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
// antes de los parentesis de los argumentos ponemos la palabra async
// esto convertira la funcion en una promesa
// un return es que se resolvio la promesa
const findHero = async(id) => {

    const hero = heroes.find(hero => hero.id === id);

    if(!hero){
        throw `Hero with id ${id} not found`
    }

    return hero.name;
}