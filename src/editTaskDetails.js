import { projectArray } from "./pushProjectToArray";
import { displayAddedTasks } from "./renderTaskDisplay";

const editTaskDetails = (titleContent, descriptionContent, dueDateContent, priorityContent, currentProject, title) => {
    const taskPopUp = document.getElementsByClassName("taskPopUp")[0];
    while (taskPopUp.firstChild) {
        taskPopUp.removeChild(taskPopUp.firstChild);
    }

    let editTaskHeading = document.createElement("h3");
    editTaskHeading.textContent = "Edit This Task:";
    taskPopUp.appendChild(editTaskHeading);

    let titleEdit = document.createElement("input");
    titleEdit.setAttribute("value", titleContent);
    titleEdit.classList.add("editInputs");
    taskPopUp.appendChild(titleEdit);

    let descriptionEdit = document.createElement("textarea");
    descriptionEdit.setAttribute("rows", "5");
    // descriptionEdit.setAttribute("value", descriptionContent);
    descriptionEdit.value = descriptionContent;
    descriptionEdit.classList.add("editInputs");
    taskPopUp.appendChild(descriptionEdit);
  

    let dueDateEdit = document.createElement("input");
    dueDateEdit.setAttribute("type", "date");
    dueDateEdit.classList.add("editInputs");
    taskPopUp.appendChild(dueDateEdit);

    let priorityEdit = document.createElement("input");
    taskPopUp.appendChild(priorityEdit);
    priorityEdit.classList.add("editInputs");
    priorityEdit.setAttribute("value", priorityContent);

    let finishEditBtn = document.createElement("button");
    finishEditBtn.classList.add("editBtn");
    finishEditBtn.textContent = "Complete Edits";
    taskPopUp.appendChild(finishEditBtn);


    finishEditBtn.addEventListener("click", () => {

        console.log(currentProject);
        let currentProjectToEdit = projectArray.find(project => project.projectName === currentProject);


        let currentTask = currentProjectToEdit.taskArray.find(task => task.title === titleContent);
        currentTask.title = titleEdit.value;
        currentTask.description = descriptionEdit.value;
        currentTask.dueDate = dueDateEdit.value;
        currentTask.priority = priorityEdit.value;

        console.log(currentProjectToEdit); //for debugging


        displayAddedTasks(currentProjectToEdit);

    });


}

export { editTaskDetails };