
// los mappers nos sirven para adaptar los objeto q viene del backend
// como los nombre etc
// es una funcion q resive el objeto y genera una instancia

import { User } from "../models/user"

/**
 * 
 * @param {Like<User>} localhostUser 
 * @returns {User}
 */
export const localhostUserToModel = (localhostUser) => {

    const {
        id,
        isActive, 
        balance,
        avatar,
        first_name,
        last_name,
        gender
    } = localhostUser;
    return new User({
        id,
        isActive,
        balance,
        avatar,
        // aqui esta el ejemplo del mappers
        // es mapear a como esperamos la informacion en el front
        firstName: first_name,
        lastName: last_name,
        gender,
    });
}