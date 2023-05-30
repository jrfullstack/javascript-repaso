import { createTodoHTML } from "./";

let element;

/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */
export const renderTodos = (elementId, todos = []) => {

    // nos aseguramos q venga algo en el elemento
    if(!element){
        element = document.querySelector(elementId);
    }

    // nos aseguramos q el elementId sea valido
    if (!element) {
        throw new Error(`Element ${elementId} not found`)
    }

    // pulgamos el contenido
    element.innerHTML = '';

    todos.forEach(todo => {
        element.append(createTodoHTML(todo));
    });
}