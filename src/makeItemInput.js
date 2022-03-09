const titleInput = document.createElement("input");
titleInput.setAttribute("placeholder", "Title");
const descriptionInput = document.createElement("input");
descriptionInput.setAttribute("placeholder", "Description");
const dueDateInput = document.createElement("input");
dueDateInput.setAttribute("placeholder", "Due Date");
const priorityInput = document.createElement("input");
priorityInput.setAttribute("placeholder", "Priority");

const newItemSubmitBtn = document.createElement("button");
newItemSubmitBtn.textContent = "Add New To-Do-Item";

export { titleInput, descriptionInput, dueDateInput, priorityInput, newItemSubmitBtn };