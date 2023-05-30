import usersStore from "./store/users-store";
import { renderTable } from "./presentation/render-table/render-table";
import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderAddButton } from "./presentation/render-add-button/render-add-button";
import { renderModal } from "./presentation/render-modal/render-modal";
import { saveUser } from "./use-cases/save-user";

/**
 * @param {HTMLDivElement} element
 */
export const UsersApp = async(element) => {

    // mostramos en la pagina el loading al inicio de la carga
    element.innerHTML = 'Loading...';

    // llamamos la funcion q cargarla la informacioin de la pagina
    await usersStore.loadNextPage();

    // kitamos el loading
    element.innerHTML = "";

    // mostramos la tabla
    renderTable(element);

    // mostramos los botones
    renderButtons(element);

    // mostramos el boton de aniadir
    renderAddButton(element);

    // mostramos el modal
    renderModal(element, async(userLike) => {
        const user = await saveUser(userLike);
        usersStore.onUserChanged(user);
        renderTable();
    });
}