const renderTaskDisplay = () => {
    const content = document.getElementById("content");

    const taskDisplay = document.createElement("div");
    taskDisplay.setAttribute("id", "taskDisplay");

    content.appendChild(taskDisplay);

    const taskHeading = document.createElement("div");
    taskHeading.setAttribute("id","taskHeading");
    taskDisplay.appendChild(taskHeading);


    const titleHeading = document.createElement("p");
    titleHeading.textContent = "Task Name";
    taskHeading.appendChild(titleHeading);

    const descriptionHeading = document.createElement("p");
    descriptionHeading.textContent = "Description";
    taskHeading.appendChild(descriptionHeading);

    const dueDateHeading = document.createElement("p");
    dueDateHeading.textContent = "Due";
    taskHeading.appendChild(dueDateHeading);

    const priorityHeading = document.createElement("p");
    priorityHeading.textContent = "Priority";
    taskHeading.appendChild(priorityHeading);

}

const displayAddedTasks = (currentProject) => {
    const taskDisplay = document.getElementById("taskDisplay");


    while (taskDisplay.firstElementChild) {
        taskDisplay.firstElementChild.remove();
    }

    const taskHeading = document.createElement("div");
    taskHeading.setAttribute("id","taskHeading");
    taskDisplay.appendChild(taskHeading);


    const titleHeading = document.createElement("p");
    titleHeading.textContent = "Task Name";
    taskHeading.appendChild(titleHeading);

    const descriptionHeading = document.createElement("p");
    descriptionHeading.textContent = "Description";
    taskHeading.appendChild(descriptionHeading);

    const dueDateHeading = document.createElement("p");
    dueDateHeading.textContent = "Due";
    taskHeading.appendChild(dueDateHeading);

    const priorityHeading = document.createElement("p");
    priorityHeading.textContent = "Priority";
    taskHeading.appendChild(priorityHeading);

    currentProject.taskArray.forEach(task => {
        let taskHolder = document.createElement("div");
        taskHolder.classList.add("taskHolder");
        taskDisplay.appendChild(taskHolder);

        let taskTitle = document.createElement("p");
        taskTitle.textContent = task.title;
        taskHolder.appendChild(taskTitle);

        let taskDescription = document.createElement("p");
        taskDescription.textContent = task.description;
        taskHolder.appendChild(taskDescription);

        let taskDueDate = document.createElement("p");
        taskDueDate.textContent = task.dueDate;
        taskHolder.appendChild(taskDueDate);

        let taskPriority = document.createElement("p");
        taskPriority.textContent = task.priority;
        taskHolder.appendChild(taskPriority);

    });
}

export { renderTaskDisplay, displayAddedTasks };