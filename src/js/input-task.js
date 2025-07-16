import { refs } from "./refs";
import { saveInputToStorage, getInputFromStorage } from "./local-storage-api";

export function handleInputTask(ev) {
    const title = refs.form.elements.taskName.value.trim();
    const descr = refs.form.elements.taskDescription.value.trim();

    const newTask = {
        title,
        descr
    }
    
    saveInputToStorage(newTask)
}

export function getInputTaskToInput() {
    const input = getInputFromStorage();

    if (!input) {
        return;
    }

    refs.form.elements.taskName.value = input.title ?? "";
    refs.form.elements.taskDescription.value = input.descr ?? "";
}

