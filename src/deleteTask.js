import { projectArray } from "./pushProjectToArray";
import { displayAddedTasks } from "./renderTaskDisplay";
import { saveProjects } from "./saveProjects";

const deleteTask = (currentProject, title) => {
    let selectedProject = projectArray.find(project => project.projectName === currentProject);
    console.log("Selected Project: " + selectedProject);

    let currentTask = selectedProject.taskArray.find(task => task.title === title );
    console.log("Current task: " + currentTask);

    let itemToDelete = selectedProject.taskArray.indexOf(currentTask);
    selectedProject.taskArray.splice(itemToDelete, 1);
    console.log(selectedProject);
    displayAddedTasks(selectedProject);

    saveProjects();
}

export {deleteTask};