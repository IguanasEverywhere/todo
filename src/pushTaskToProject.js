import { displayAddedTasks } from "./renderTaskDisplay";

const pushTaskToProject = (task, currentProject) => {
    currentProject.taskArray.push(task);
    console.log(currentProject);
    displayAddedTasks(currentProject);
}

export { pushTaskToProject };