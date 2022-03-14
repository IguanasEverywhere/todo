import { projectArray } from "./pushProjectToArray";
import { addButtonToProjectDisplay } from "./renderProjectDisplay";
import { displayAddedTasks } from "./renderTaskDisplay";

const changeCurrentProject = (projectName) => {
    const projectDisplay = document.getElementById("projectDisplay");
    projectDisplay.textContent = projectName;

    let currentProject = projectArray.find(project => project.projectName === projectName);

    console.log("Current project is " + currentProject.projectName); // for debugging in console
    console.log(currentProject);

    const taskDisplay = document.getElementById("taskDisplay");
    while(taskDisplay.firstElementChild) {
        taskDisplay.firstElementChild.remove();
     }
    

    displayAddedTasks(currentProject);

    addButtonToProjectDisplay(currentProject);

    return currentProject;
}

export { changeCurrentProject };