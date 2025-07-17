import { refs } from "./refs";
import iziToast from "izitoast";

export function emptyInput(title, descr) {
    const isEmpty = title === '' || descr === '';

    if (isEmpty) {
        iziToast.warning({
            title: "Порожньо",
            message: "Введіть свій task",
            position: "bottomCenter"
        })
    }

    return isEmpty;
}

export function isDuplicate(title, descr) {
    const allText = refs.tasksList.querySelectorAll(".task-list-item");
    const duplicate = Array.from(allText).some(item => {
        const itemTitle = item.querySelector("h3")?.textContent.trim().toLowerCase();
        const itemDescr = item.querySelector("p")?.textContent.trim().toLowerCase();

        return (title.toLowerCase() === itemTitle && descr.toLowerCase() === itemDescr);
    });
    if (duplicate) {
        iziToast.error({
            title: "Увага",
            message: "Цей task вже існує",
            position: "bottomCenter"
            })
    }

    return duplicate;
}