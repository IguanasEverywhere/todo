import { renderTaskHeading } from "./renderTaskHeading";
import { renderTaskDetailsPopUp } from "./renderTaskDetailsPopUp";

const renderTaskDisplay = () => {
    const content = document.getElementById("content");

    const taskDisplay = document.createElement("div");
    taskDisplay.setAttribute("id", "taskDisplay");
    content.appendChild(taskDisplay);

    renderTaskHeading();

}

const displayAddedTasks = (currentProject) => {
    const taskDisplay = document.getElementById("taskDisplay");


    while (taskDisplay.firstElementChild) {
        taskDisplay.firstElementChild.remove();
    }

    renderTaskHeading();

    currentProject.taskArray.forEach(task => {
        let taskHolder = document.createElement("div");
        taskHolder.classList.add("taskHolder");
        taskDisplay.appendChild(taskHolder);
        taskHolder.addEventListener("click", () => {
            renderTaskDetailsPopUp(task.title, task.description, task.dueDate, task.priority);
        });

        let taskTitle = document.createElement("p");
        taskTitle.textContent = task.title;
        taskHolder.appendChild(taskTitle);

        let taskDueDate = document.createElement("p");
        taskDueDate.textContent = task.dueDate;
        taskHolder.appendChild(taskDueDate);

    });

    const projectTasksMsg = document.createElement("p");
    projectTasksMsg.classList.add("projectTasksMsg");
    projectTasksMsg.textContent = "Click a task to view more details";
    taskDisplay.appendChild(projectTasksMsg);
}

export { renderTaskDisplay, displayAddedTasks };