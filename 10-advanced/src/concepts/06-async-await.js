import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncAwaitComponent = async(element) => {
    

    const id1 = "5d86371fd55e2e2a30fe1cc4";
    const id2 = "5d86371f2343e37870b91ef1";

    // para usar el await la funcion debe se async
    // el proceso  no continuara hasta q se complete el resultado de estas funciones
    // tambien podemos desestructuras el valos de los objetos
    // const hero1 = await findHero(id1);
    // const hero2 = await findHero(id2);
    // element.innerHTML = `${hero1.name} / ${hero2.name}`;


    // manejando errores
    // lo atrapamos con un try and catch
    try {
        const hero1 = await findHero(id1);
        const hero2 = await findHero(id2);
        element.innerHTML = `${hero1.name} / ${hero2.name}`;

    } catch (error) {
        // de volveremos el primer error encontrado
        element.innerHTML = error;
    }

    
};

const findHero = async (id) => {
    const hero = heroes.find((hero) => hero.id === id);

    if (!hero) {
        throw `Hero with id ${id} not found`;
    }

    return hero;
};