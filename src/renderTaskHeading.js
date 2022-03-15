const renderTaskHeading = () => {
    const taskDisplay = document.getElementById("taskDisplay");

    const taskHeading = document.createElement("div");
    taskHeading.setAttribute("id", "taskHeading");
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

export { renderTaskHeading };

