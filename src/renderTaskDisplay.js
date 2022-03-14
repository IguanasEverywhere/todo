const renderTaskDisplay = () => {
    const content = document.getElementById("content");

    const taskDisplay = document.createElement("div");
    taskDisplay.setAttribute("id", "taskDisplay");

    taskDisplay.textContent = "Task Display Placeholder";

    content.appendChild(taskDisplay);
}

const displayAddedTasks = (currentProject) => {
    const taskDisplay = document.getElementById("taskDisplay");

    while(taskDisplay.firstElementChild) {
        taskDisplay.firstElementChild.remove();
     }
    currentProject.taskArray.forEach(task => {
        let taskTitle = document.createElement("li");
        taskTitle.textContent = task.title;
        taskDisplay.appendChild(taskTitle);
    });
}

export { renderTaskDisplay, displayAddedTasks };