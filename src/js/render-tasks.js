import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { refs } from "./refs";
import { createTask } from "./markup-tasks";
import { nanoid } from "nanoid";
import { saveTaskToStorage, deleteTaskFromStorage, clearInputStorage } from "./local-storage-api";
import { emptyInput, isDuplicate } from "./input-aydit";

export function addTask(ev) {
    ev.preventDefault()

    const title = ev.target.taskName.value.trim();
    const descr = ev.target.taskDescription.value.trim();

    emptyInput(title, descr);
    if (isDuplicate(title, descr)) {
        return refs.form.reset();
    };

    const newTask = {
        title,
        descr,
        id: nanoid()
    }

    saveTaskToStorage(newTask);
    const murkup = createTask(newTask);
    refs.tasksList.insertAdjacentHTML("beforeend", murkup);

    iziToast.success({
            title: "Вітаю",
            message: "Твій task успішно додано",
            position: "bottomCenter"
        })

    refs.form.reset();

    clearInputStorage();
    
}

export function deleteTask(ev) {
    if (ev.target.classList.contains("task-list-item-btn")) {
        const taskItem = ev.target.closest(".task-list-item");
        const taskId = taskItem.dataset.id
        deleteTaskFromStorage(taskId)
        taskItem.remove()
        
        // completedTasksCount += 1;
        iziToast.success({
            title: "+1 до 'Виконано'",
            message: "Твій task успішно видалено",
            position: "bottomCenter"
        })
    }
}