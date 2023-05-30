import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";


/**
 * 
 * @param {Number} page 
 * @returns {Promise<User[]>}
 */
export const loadUsersByPage = async(page = 1) => {

    // importamos de las variables de entorno la base de la direccion
    // y mandamos la pagina a solicitar
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page=${page}`;

    // hacemos la peticion con fetch
    const res = await fetch(url);

    // extraemos la data y la pasamos a json
    const data = await res.json();
    
    // mapeamos nuestra data
    // const users = data.map(userLike => localhostUserToModel(userLike));
    const users = data.map(localhostUserToModel);

    // regresamos los usuarios ya mapeados
    return users;
}