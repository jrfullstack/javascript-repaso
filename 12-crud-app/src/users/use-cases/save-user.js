import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { userModelToLocalhost } from "../mappers/user-to-localhost.mapper";
import { User } from "../models/user";


/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async(userLike) => {

    // mandamos el userLike q viene del formulario
    // y creamos nuestro user
    const user = new User(userLike);

    // validamos q no este vacio
    if(!user.firstName || !user.lastName)
        throw 'First & Last name are required';

    // mapiamos el objeto q recibira el backend
    const useToSave = userModelToLocalhost(user);

    let userUpdated;

    if(user.id){
        userUpdated =  await updateUser(useToSave);        
    }else{
        userUpdated = await createUser(useToSave);
    }

    return localhostUserToModel(userUpdated);
}


/**
 * 
 * @param {Like<User>} user 
 */
const createUser = async(user) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users`;
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const newUser = await res.json();
    console.log({newUser})

    return newUser;
}


/**
 * 
 * @param {Like<User>} user 
 */
const updateUser = async(user) => {

    const url = `${import.meta.env.VITE_BASE_URL}/users/${user.id}`;
    const res = await fetch(url, {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const updatedUser = await res.json();
    console.log({updatedUser})

    return updatedUser;
}