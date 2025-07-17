import { refs } from "./refs";
import { getTaskFromStorage } from "./local-storage-api";
import { updateTotalCountTaskToDo } from "./counter-task";

export function createTask(params) {
    const murkup = `
        <li class="task-list-item" data-id="${params.id}">
            <button class="task-list-item-btn">Delete</button>
            <h3>${params.title}</h3>
            <p>${params.descr}</p>
        </li>`
    return murkup;
}

export function getTaskToMarkup() {
    const arrTask = getTaskFromStorage();
    const murkup = arrTask.map(createTask).join('');
    refs.tasksList.insertAdjacentHTML("beforeend", murkup);
    updateTotalCountTaskToDo();
}