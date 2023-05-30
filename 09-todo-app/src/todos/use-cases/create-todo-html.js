import { Todo } from "../models/todo.model";


/**
 * 
 * @param {Todo} todo 
 */
export const createTodoHTML = (todo) => {
    if(!todo) throw new Error('A TODO object is required');

    // desestructuramos
    const {description, done, id} = todo;

    const html = `
        <div class="view">
            <input class="toggle" type="checkbox" ${done ? "checked" : ""}>
            <label>${description}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    `;

    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    // agregamos un atributo a el li
    liElement.setAttribute('data-id', id);
    // la condicion si esta done en true
    if (todo.done){
        liElement.classList.add('completed');
    }

    return liElement;
}