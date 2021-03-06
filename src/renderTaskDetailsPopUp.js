import { deleteTask } from "./deleteTask.js";
import { editTaskDetails } from "./editTaskDetails.js";

const renderTaskDetailsPopUp = (title, description, dueDate, priority) => {

    const taskDisplay = document.getElementById("taskDisplay");

    const taskPopUp = document.createElement("div");
    taskPopUp.classList.add("taskPopUp");
    taskPopUp.style.visibility = "visible";

    let taskTitle = document.createElement("h1");
    taskTitle.textContent = title;
    taskPopUp.appendChild(taskTitle);

    let taskDescription = document.createElement("p");
    taskDescription.textContent = description;
    taskPopUp.appendChild(taskDescription);

    let taskDueDate = document.createElement("h3");
    taskDueDate.textContent = "Due Date: " + dueDate;
    taskPopUp.appendChild(taskDueDate);

    let taskPriority = document.createElement("h4");
    taskPriority.textContent = priority;
    taskPopUp.appendChild(taskPriority);

    let closeBtn = document.createElement("button");
    closeBtn.classList.add("taskPopUpCloseBtn")
    closeBtn.textContent = "X";
    taskPopUp.appendChild(closeBtn);

    closeBtn.addEventListener("click", () => {
        taskPopUp.remove();
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("deleteBtn");
    deleteBtn.textContent = "Delete This Task";
    taskPopUp.appendChild(deleteBtn);

    let editBtn = document.createElement("button");
    editBtn.classList.add("editBtn");
    editBtn.textContent = "Edit This Task";
    taskPopUp.appendChild(editBtn);

    taskDisplay.appendChild(taskPopUp);

    let currentProjectText = document.getElementById("projectDisplay");
    let currentProject = currentProjectText.textContent.slice(0, currentProjectText.textContent.length - 1); // to get rid of + sign from textContent
    deleteBtn.addEventListener("click", () => {
        deleteTask(currentProject, title);
    });

    editBtn.addEventListener("click", () => {
        editTaskDetails(taskTitle.textContent, taskDescription.textContent, taskDueDate.textContent, taskPriority.textContent, currentProject, title);
    });

}

export { renderTaskDetailsPopUp };