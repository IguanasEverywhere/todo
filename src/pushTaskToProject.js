
const pushTaskToProject = (task, currentProject) => {
   currentProject.taskArray.push(task);
   console.log(currentProject);
}

export {pushTaskToProject};