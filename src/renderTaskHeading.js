const renderTaskHeading = () => {
    const taskDisplay = document.getElementById("taskDisplay");

    const taskHeading = document.createElement("div");
    taskHeading.setAttribute("id", "taskHeading");
    taskDisplay.appendChild(taskHeading);


    const titleHeading = document.createElement("p");
    titleHeading.textContent = "Task Name";
    taskHeading.appendChild(titleHeading);

    const dueDateHeading = document.createElement("p");
    dueDateHeading.textContent = "Due Date";
    taskHeading.appendChild(dueDateHeading);

}

export { renderTaskHeading };

