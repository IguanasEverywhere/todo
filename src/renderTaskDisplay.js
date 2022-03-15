import { renderTaskHeading } from "./renderTaskHeading";

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

        let taskTitle = document.createElement("p");
        taskTitle.textContent = task.title;
        taskHolder.appendChild(taskTitle);

        let taskDescription = document.createElement("p");
        taskDescription.textContent = task.description;
        taskHolder.appendChild(taskDescription);

        let taskDueDate = document.createElement("p");
        taskDueDate.textContent = task.dueDate;
        taskHolder.appendChild(taskDueDate);

        let taskPriority = document.createElement("p");
        taskPriority.textContent = task.priority;
        taskHolder.appendChild(taskPriority);

    });
}

export { renderTaskDisplay, displayAddedTasks };