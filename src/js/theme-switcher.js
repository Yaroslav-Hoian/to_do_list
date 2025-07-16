import { refs } from "./refs";
import { getThemeFromStorage, setThemeToStorage } from "./local-storage-api";

export function setThemeFromStorage() {
    const theme = getThemeFromStorage();
    refs.body.classList = theme;
}

export function themeSwitcher() {
    refs.body.classList.toggle("theme-dark")
    refs.body.classList.toggle("theme-light")
    const theme = refs.body.classList.value;
    setThemeToStorage(theme);
}