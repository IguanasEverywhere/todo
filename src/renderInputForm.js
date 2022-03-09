import { titleInput, descriptionInput, dueDateInput, priorityInput, newItemSubmitBtn } from './makeItemInput';
import { itemMaker } from './itemMaker';
import { defaultProject } from './projects';
import { renderProject } from './renderProjects';

const renderInputForm = () => {
    const pageBody = document.getElementById("content");
    pageBody.appendChild(titleInput);
    pageBody.appendChild(descriptionInput);
    pageBody.appendChild(dueDateInput);
    pageBody.appendChild(priorityInput);
    pageBody.appendChild(newItemSubmitBtn);
}

const removeInputForm = () => {
    const pageBody = document.getElementById("content");
    pageBody.removeChild(titleInput);
    pageBody.removeChild(descriptionInput);
    pageBody.removeChild(dueDateInput);
    pageBody.removeChild(priorityInput);
    pageBody.removeChild(newItemSubmitBtn);
}

newItemSubmitBtn.addEventListener("click", () => {
    defaultProject.push(itemMaker(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value));
    titleInput.value = descriptionInput.value = dueDateInput.value = priorityInput.value = null;
    renderProject();
    console.log(defaultProject);
    removeInputForm();
});

export { renderInputForm, removeInputForm };

