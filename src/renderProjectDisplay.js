import { makeTask } from "./makeTask";

const renderProjectDisplay = (projectName) => {
    const content = document.getElementById("content");

    const projectDisplay = document.createElement("div");
    projectDisplay.setAttribute("id", "projectDisplay");

    content.appendChild(projectDisplay);

}

const addButtonToProjectDisplay = (currentProject) => {
    const projectDisplay = document.getElementById("projectDisplay");
    const addTaskBtn = document.createElement("button");
    addTaskBtn.textContent = "Add Task For " + currentProject.projectName;
    projectDisplay.appendChild(addTaskBtn);

    // will complete with prompts for now, will make menu later
    addTaskBtn.addEventListener("click", () => {
        let title = prompt("What is the title of your task?");
        let description = prompt ("What is the description of the task?");
        let dueDate = prompt ("When is the due date for this task?");
        let priority = prompt ("What is this task's priority?");

       makeTask(title, description, dueDate, priority);
    });
}


export { renderProjectDisplay, addButtonToProjectDisplay };