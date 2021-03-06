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

        const createTaskMenu = document.createElement("div");
        createTaskMenu.classList.add("createTaskMenu");
        projectDisplay.appendChild(createTaskMenu);

        let titleInput = document.createElement("input");
        titleInput.setAttribute("placeholder", "Task Name (max 40 chars)");
        titleInput.setAttribute("maxlength", "40");
        createTaskMenu.appendChild(titleInput);

        let descriptionInput = document.createElement("textarea");
        descriptionInput.setAttribute("rows", "5");
        descriptionInput.setAttribute("placeholder", "Task Description");
        descriptionInput.setAttribute("maxlength", "500");
        createTaskMenu.appendChild(descriptionInput);

        let dueDateInput = document.createElement("input");
        dueDateInput.type="date";
        createTaskMenu.appendChild(dueDateInput);

        // add drop down menu for the priority input
        let priorityDiv = document.createElement("div");
        createTaskMenu.appendChild(priorityDiv);
        priorityDiv.classList.add("priorityDiv");
        let priorityInput = document.createElement("button");
        priorityInput.textContent = "Select Priority ↓";
        priorityInput.classList.add("priorityButton");
        priorityDiv.appendChild(priorityInput);
        let highPriority = document.createElement("button");
        highPriority.textContent = "High";
        highPriority.classList.add("priorityLevelButtons");
        let lowPriority = document.createElement("button");
        lowPriority.textContent = "Low";
        lowPriority.classList.add("priorityLevelButtons");
        let dropDown = document.createElement("div");
        dropDown.classList.add("dropDown");
        priorityDiv.appendChild(dropDown);
        dropDown.style.visibility = "hidden";
        priorityInput.addEventListener("click", () => {
            dropDown.style.visibility = "visible";
        });
        dropDown.appendChild(highPriority);
        dropDown.appendChild(lowPriority);
        highPriority.addEventListener("click", () => {
            priorityInput.value = "High Priority";
            priorityInput.textContent = "High Priority";
            dropDown.style.visibility="hidden";
        });
        lowPriority.addEventListener("click", () => {
            priorityInput.value = "Low Priority";
            priorityInput.textContent = "Low Priority";
            dropDown.style.visibility="hidden";
        });


        let submitBtn = document.createElement("button");
        submitBtn.textContent = "Create Task";
        submitBtn.classList.add("submitBtn");
        createTaskMenu.appendChild(submitBtn);

        submitBtn.addEventListener("click", () => {
            pushTaskToProject(makeTask(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value), currentProject);
            addTaskBtn.removeAttribute("disabled");
            createTaskMenu.remove();
        });
    });

}

export { addButtonToProjectDisplay };