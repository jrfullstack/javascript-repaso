
// el store es nuestro lugar centralizado de informacion

import { User } from "../models/user";
import { loadUsersByPage } from "../use-cases/load-users-by-page";

const state = {
    // paginacion
    currentPage: 0,

    // arreglo de usuarios
    users: [],        
}

// funcion para cargar la pagina siguiente
const loadNextPage = async() => {
    // llamamos la funcion de cargar pagina
    const users = await loadUsersByPage(state.currentPage + 1);

    // si la pagina q se a cargado no contiene usuarios q no haga mas nada
    if(users.length === 0) return;

    // cada vez q se llame la funcion el currentPage se le sumara 1
    state.currentPage += 1;

    // y actualizamos los usuarios
    state.users = users;

}

// funcion para cargar la pagina anterior
const loadPreviousPage = async () => {
    // no podra bajas mas de la pagina 1
    if (state.currentPage <= 1) return;

    // llamamos la funcion de cargar pagina y restamos 1
    const users = await loadUsersByPage(state.currentPage - 1);

    // le restamos 1 al contador de pagina
    state.currentPage -= 1;

    // y actualizamos los usuarios
    state.users = users;
};

// funcion para cargar la informacion cuando un usuario cambia
/**
 * 
 * @param {User} updatedUser 
 */
const onUserChanged = async (updatedUser) => {
    let wasFound = false;

    state.users = state.users.map(user => {
        if(user.id === updatedUser.id){
            wasFound = true
            return updatedUser;
        }
        return user;        
    })

    if (state.users.length < 10 && !wasFound) {
        state.users.push(updatedUser);
    }

};

// recargar la pagina
const reloadPage = async () => {
    const users = await loadUsersByPage(state.currentPage);
    if (users.length === 0) {
        await loadPreviousPage();
        return;
    }
    state.users = users;
};


// exportamos las funcion
// no esportamos el state por q no queremos q nadie cambie informacion
export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    // usamos el operador spread para exparcir cada uno de ellos ya q pasan por referencia
    /**
     *
     * @returns {User[]}
     */
    getUsers: () => [...state.users],

    // funcion para saber cual es la pagina actual
    // con los primitivos no necesitamos el operador spread ya q pasan por valor
    /**
     *
     * @returns {Number}
     */
    getCurrentPage: () => state.currentPage,
};