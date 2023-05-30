import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = (element) => {

    const id1 = "5d86371f233c9f2425f16916";
    const id2 = "5d86371f25a058e5b1c8a65e";
    
    findHero(id1, (error, hero1) => {
        if(error){
            element.innerHTML = error;
            return;
        }

        // aqui empieza el callback hell 
        // cuando necesitaramos mostrar varios errores 
        // tendriamos q llamar montones de veces la funcio y anidar
        findHero(id2, (error, hero2) => {
            if (error) {
                element.innerHTML = error;
                return;            
            }

            element.innerHTML = `${hero1.name} / ${hero2.name}`
        })
        


    });    
};


/**
 * 
 * @param {String} id 
 * @param {(error: String|Null, hero: Object)=> void} callback 
 */
const findHero = (id, callback) => {

    const hero = heroes.find( hero => hero.id === id );

    if(!hero){
        callback(`Hero with id ${id} not found.`);
        return; // regresa underfined
    }
    
    callback(null, hero);
}