
// importar un archivo html en vite
import html from './app.html?raw';
import todoStore, { Filters } from '../store/todo.store';
import { renderTodos, renderPending } from "./use-cases";

const ElementIDS = {
    ClearCompletedButton: ".clear-completed",
    TodoList: ".todo-list",
    NewTodoInput: "#new-todo-input",
    TodoFilters: ".filtro",
    PendingCountLabel: "#pending-count",
};

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {

    // lo q redibujara en el html
    const displayTodos = () =>{
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos(ElementIDS.TodoList, todos);
        updatePendingCount();
    }

    const updatePendingCount = () => {
        renderPending(ElementIDS.PendingCountLabel);
    }

    // Cuando la funcion App se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    // referencias HTML
    const newDescriptionInput = document.querySelector(ElementIDS.NewTodoInput);
    const todoListUL = document.querySelector(ElementIDS.TodoList);
    const clearCompletedButton = document.querySelector(ElementIDS.ClearCompletedButton);
    const filtersLIs = document.querySelectorAll(ElementIDS.TodoFilters);


    // Listeners
    newDescriptionInput.addEventListener('keyup', (event) => {
        // se detendra aqui mientras no sea enter
        if(event.keyCode !== 13) return;

        // limpiamos los espacion del inicio y del final
        // y evaluamos si no tiene contenido
        // o si le da a enter sin contenido
        if(event.target.value.trim().length === 0) return;

        // mandamos el valor al store
        todoStore.addTodo(event.target.value);

        // volvemos a mostrar todos los todos
        displayTodos();

        // reiniciamos el valor del input
        event.target.value = '';
    });

    todoListUL.addEventListener('click', (event) => {
        // con closest buscamos el data-id mas cerca hacia el padre
        const element = event.target.closest("[data-id");
        // obtenemos el valor de data-id
        todoStore.toggleTodo(element.getAttribute("data-id"));
        // volvemos a mostrar todos los todos
        displayTodos();
    });

    todoListUL.addEventListener("click", (event) => {
        // escuchamos a cual boton de eliminar se le doy click y lo almacenamos en una variable
        const isDestroyElement = event.target.className === 'destroy';

        // con closest buscamos el data-id mas cerca hacia el padre
        const element = event.target.closest("[data-id");

        // validamos si el elemento no existe y si el boton tiene la clase
        if(!element || !isDestroyElement) return;

        // obtenemos el valor de data-id
        todoStore.deleteTodo(element.getAttribute("data-id"));
        // volvemos a mostrar todos los todos
        displayTodos();
    });

    clearCompletedButton.addEventListener("click", () => {
        
        todoStore.deleteCompleted();
        // volvemos a mostrar todos los todos
        displayTodos();
    });

    filtersLIs.forEach(element => {

        element.addEventListener('click', element => {
            // removemos la clase selected a todos
            filtersLIs.forEach(el => el.classList.remove('selected'));

            // agregamos la clase selected al elemento seleccionado
            element.target.classList.add('selected');

            switch (element.target.text) {
                case "Todos":
                    todoStore.setFilter(Filters.All);
                    break;

                case "Pendientes":
                    todoStore.setFilter(Filters.Pending);
                    break;

                case "Completados":
                    todoStore.setFilter(Filters.Completed);
                    break;
            }

            displayTodos();
        })
    })
}