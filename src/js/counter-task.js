import { refs } from "./refs";
import { getCompleteTaskFromStorage } from "./local-storage-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export function updateTotalCountTaskToDo() {
    const total = refs.tasksList.querySelectorAll(".task-list-item").length;
    refs.counterTaskToDo.textContent = `Завдання до виконання ${total}`;
}

export function getCompleteTaskToComplete() {
    const total = getCompleteTaskFromStorage();
    refs.counterTaskComplete.textContent = `Виконано ${total}`;
}