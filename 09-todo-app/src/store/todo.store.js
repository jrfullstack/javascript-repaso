import { Todo } from "../todos/models/todo.model";

export const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo("Piedra del alama"),
        new Todo("Piedra del infinito"),
        new Todo("Piedra del tiempo"),
        new Todo("Piedra del poder"),
        new Todo("Piedra del realidad"),
    ],
    filter: Filters.All,
};

const initStore = () => {
    loadStore(state);
    console.log('InitStore');
}

const loadStore = () => {
    if(!localStorage.getItem('state')) return;

    const {todos = [], filter = Filters.All} = JSON.parse(localStorage.getItem("state"));
    state.todos = todos;
    state.filter = filter;
}

const saveStateToLocalStorage = () => {
    localStorage.setItem("state", JSON.stringify(state));
}

const getTodos = (filter = Filters.All) => {
    
    switch (filter) {
        case Filters.All:
            // mandamos un nuevo arreglo con los valores
            // no ncesitamos el break por que ya el return cosa la ejecucion
            return [...state.todos];

        case Filters.Completed:
            // regresa los todos donde done este en true
            return state.todos.filter((todo) => todo.done);

        case Filters.Pending:
            // regresa los todos donde done este en false
            return state.todos.filter((todo) => !todo.done);

        default:
            throw new Error(`Option ${filter} is not valid`);
    }
};

/**
 * 
 * @param {String} description 
 */
const addTodo = (description) => {
    // validamos la description
    if(!description) throw new Error('Description is required');
    // incertamos en nuevo todo
    state.todos.push(new Todo(description));

    // guardar en el local storage
    saveStateToLocalStorage();

};

const toggleTodo = (todoId) => {
    // barremos cada todo
    state.todos = state.todos.map((todo) => {
        // comparamos si el id del barrido es igual al id del argumento
        if (todo.id === todoId) {
            // cambiamos del done como un interruptor
            todo.done = !todo.done;
        }
        return todo;
    });

    // guardar en el local storage
    saveStateToLocalStorage();
}

const deleteTodo = (todoId) => {
    // devolvemos al state todos menos el que viene como argumento
    state.todos = state.todos.filter((todo) => todo.id !== todoId);

    // guardar en el local storage
    saveStateToLocalStorage();
};

const deleteCompleted = () => {
    // devolvemos todos los todos los que esten completados
    state.todos = state.todos.filter((todo) => !todo.done);

    // guardar en el local storage
    saveStateToLocalStorage();
};

/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;

    // guardar en el local storage
    saveStateToLocalStorage();
};

const getCurrentFilter = () => {
    return state.filter;
};

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}