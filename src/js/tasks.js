import { refs } from "./refs";
import { themeSwitcher, setThemeFromStorage } from "./theme-switcher";
import { initStorage } from "./local-storage-api";
import { addTask, deleteTask } from "./render-tasks";
import { getTaskToMarkup } from "./markup-tasks";
import { handleInputTask } from "./input-task";

setThemeFromStorage();
initStorage();
getTaskToMarkup();

refs.themeToggle.addEventListener("click", themeSwitcher);

refs.form.addEventListener("input", handleInputTask)

refs.form.addEventListener("submit", addTask);

refs.tasksList.addEventListener("click", deleteTask);







