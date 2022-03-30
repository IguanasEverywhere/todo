import { displayAddedTasks } from "./renderTaskDisplay";
import { saveProjects } from "./saveProjects";

const pushTaskToProject = (task, currentProject) => {
    currentProject.taskArray.push(task);
    console.log(currentProject);
    displayAddedTasks(currentProject);

   saveProjects();

}

export { pushTaskToProject };