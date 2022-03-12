import { projectArray } from "./pushProjectToArray";
import { addButtonToProjectDisplay } from "./renderProjectDisplay";

const changeCurrentProject = (projectName) => {
    const projectDisplay = document.getElementById("projectDisplay");
    projectDisplay.textContent = projectName;

    let currentProject = projectArray.find(project => project.projectName === projectName);

    console.log("Current project is " + currentProject.projectName); // for debugging in console

    addButtonToProjectDisplay(currentProject);

    return currentProject;
}

export { changeCurrentProject };