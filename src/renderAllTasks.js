import { projectArray } from "./pushProjectToArray";
import { displayAddedTasks, renderTaskDisplay } from "./renderTaskDisplay";
import { renderTaskHeading } from "./renderTaskHeading";

const renderAllTasks = () => {
    
    const projectDisplay = document.getElementById("projectDisplay");
    projectDisplay.textContent = "All Tasks";
    // this has a lot of repeated code from renderTaskDisplay. Let's try to refactor?

    const taskDisplay = document.getElementById("taskDisplay");


    while (taskDisplay.firstElementChild) {
        taskDisplay.firstElementChild.remove();
    }

    renderTaskHeading();

    projectArray.forEach(currentProject => {
        currentProject.taskArray.forEach(task => {
            let taskHolder = document.createElement("div");
            taskHolder.classList.add("taskHolder");
            taskDisplay.appendChild(taskHolder);
    
            let taskTitle = document.createElement("p");
            taskTitle.textContent = task.title;
            taskHolder.appendChild(taskTitle);
    
            let taskDueDate = document.createElement("p");
            taskDueDate.textContent = task.dueDate;
            taskHolder.appendChild(taskDueDate);
    
    
    
        });
    });

}

export { renderAllTasks };