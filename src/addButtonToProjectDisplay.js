import { pushTaskToProject } from "./pushTaskToProject";
import { makeTask } from "./makeTask";

const addButtonToProjectDisplay = (currentProject) => {
    const projectDisplay = document.getElementById("projectDisplay");
    const addTaskBtn = document.createElement("button");
    addTaskBtn.textContent = "+";
    addTaskBtn.classList.add("addTaskBtn");
    projectDisplay.appendChild(addTaskBtn);

    addTaskBtn.addEventListener("click", () => {

        addTaskBtn.setAttribute("disabled", true);

        // addTaskBtn.style.visibility = "hidden";

        const createTaskMenu = document.createElement("div");
        createTaskMenu.classList.add("createTaskMenu");
        projectDisplay.appendChild(createTaskMenu);

        let titleInput = document.createElement("input");
        titleInput.setAttribute("placeholder", "Task Name");
        createTaskMenu.appendChild(titleInput);

        let descriptionInput = document.createElement("input");
        descriptionInput.setAttribute("placeholder", "Task Description");
        createTaskMenu.appendChild(descriptionInput);

        let dueDateInput = document.createElement("input");
        dueDateInput.type="date";
        createTaskMenu.appendChild(dueDateInput);

        let priorityInput = document.createElement("input");
        priorityInput.setAttribute("placeholder", "Priority");
        createTaskMenu.appendChild(priorityInput);


        let submitBtn = document.createElement("button");
        submitBtn.textContent = "Create Task";
        createTaskMenu.appendChild(submitBtn);

        submitBtn.addEventListener("click", () => {
            pushTaskToProject(makeTask(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value), currentProject);
            addTaskBtn.removeAttribute("disabled");
            createTaskMenu.remove();
        });
    });
}

export { addButtonToProjectDisplay };