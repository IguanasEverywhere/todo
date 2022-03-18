import { projectArray } from "./pushProjectToArray";
import { displayAddedTasks } from "./renderTaskDisplay";

const deleteProject = (currentProject, title) => {
    let selectedProject = projectArray.find(project => project.projectName === currentProject);
    console.log(selectedProject);

    let currentTask = selectedProject.taskArray.find(task => task.title === title );
    console.log(currentTask);

    let itemToDelete = selectedProject.taskArray.indexOf(currentTask);
    selectedProject.taskArray.splice(itemToDelete, 1);
    console.log(selectedProject);
    displayAddedTasks(selectedProject);
}

export {deleteProject};