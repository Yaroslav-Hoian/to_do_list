import { refs } from "./refs";

export function handleInputTask(ev) {
    const title = refs.form.elements.taskName.value.trim();
    const descr = refs.form.elements.taskDescription.value.trim();

    const newTask = {
        title,
        descr
    }
    
    console.log(newTask);
    
}