const localKey = "my_tasks";
const localThemeKey = "theme";
const localInputKey = "input_task";

export function getTaskFromStorage() {
    const data = JSON.parse(localStorage.getItem(localKey));
    return data;
}

export function initStorage() {
    const data = getTaskFromStorage() ?? [];
    localStorage.setItem(localKey, JSON.stringify(data))
} 

export function saveTaskToStorage(task) {
    const tasks = getTaskFromStorage();
    tasks.push(task);
    localStorage.setItem(localKey, JSON.stringify(tasks))
}

export function deleteTaskFromStorage(id) {
    const arrTask = getTaskFromStorage();
    const filterArrTask = arrTask.filter(el => el.id !== id);
    localStorage.setItem(localKey, JSON.stringify(filterArrTask));
}

export function getThemeFromStorage() {
    const currentTheme = JSON.parse(localStorage.getItem(localThemeKey));
    return currentTheme;
}

export function setThemeToStorage(theme) {
    localStorage.setItem(localThemeKey, JSON.stringify(theme))
}

export function getInputFromStorage() {
    const inputData = JSON.parse(localStorage.getItem(localInputKey));
    return inputData;
}

export function initInputStorage() {
    const dataInput = getInputFromStorage() ?? { title: "", descr: "" }
    localStorage.setItem(localInputKey, JSON.stringify(dataInput))
}

export function saveInputToStorage(task) {
    localStorage.setItem(localInputKey, JSON.stringify(task))
}

export function clearInputStorage() {
    localStorage.removeItem(localInputKey);
}
