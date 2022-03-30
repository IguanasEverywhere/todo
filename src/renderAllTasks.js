import { projectArray } from "./pushProjectToArray";
import { renderTaskHeading } from "./renderTaskHeading";
import { changeCurrentProject } from "./changeCurrentProject";

const renderAllTasks = () => {
    
    const projectDisplay = document.getElementById("projectDisplay");
    projectDisplay.textContent = "All Tasks";
    // this has a lot of repeated code from renderTaskDisplay. Should I refactor?

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
    
            taskHolder.addEventListener("click", () => {
                changeCurrentProject(currentProject.projectName);
            });
        });
    });
    const allTasksMsg = document.createElement("p");
    allTasksMsg.classList.add("allTasksMsg");
    allTasksMsg.textContent = "Click a task to be taken to its project listing";
    taskDisplay.appendChild(allTasksMsg);

}

export { renderAllTasks };