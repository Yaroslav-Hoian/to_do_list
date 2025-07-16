import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { refs } from "./refs";
import { createTask } from "./markup-tasks";
import { nanoid } from "nanoid";
import { saveTaskToStorage, deleteTaskFromStorage } from "./local-storage-api";

export function addTask(ev) {
    ev.preventDefault()

    const title = ev.target.taskName.value.trim();
    const descr = ev.target.taskDescription.value.trim();

    if (title === '' || descr === '') {
        iziToast.warning({
            title: "Порожньо",
            message: "Введіть свій task",
            position: "bottomCenter"
        })
        return refs.form.reset();
    }

    const newTask = {
        title,
        descr,
        id: nanoid()
    }

    saveTaskToStorage(newTask);
    const murkup = createTask(newTask);
    refs.tasksList.insertAdjacentHTML("beforeend", murkup);

    refs.form.reset();
    
}

export function deleteTask(ev) {
    if (ev.target.classList.contains("task-list-item-btn")) {
        const taskItem = ev.target.closest(".task-list-item");
        const taskId = taskItem.dataset.id
        deleteTaskFromStorage(taskId)
        taskItem.remove()
    }
}