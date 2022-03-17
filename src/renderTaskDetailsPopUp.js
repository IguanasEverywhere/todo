const renderTaskDetailsPopUp = (title, description, dueDate, priority) => {

    const taskDisplay = document.getElementById("taskDisplay");

    const taskPopUp = document.createElement("div");
    taskPopUp.classList.add("taskPopUp");
    taskPopUp.style.visibility = "visible";
    
    let taskTitle = document.createElement("h1");
    taskTitle.textContent = title;
    taskPopUp.appendChild(taskTitle);

    let taskDescription = document.createElement("p");
    taskDescription.textContent = description;
    taskPopUp.appendChild(taskDescription);

    let taskDueDate = document.createElement("h3");
    taskDueDate.textContent = "Due Date: " + dueDate;
    taskPopUp.appendChild(taskDueDate);

    let taskPriority = document.createElement("h4");
    taskPriority.textContent = priority + " Priority";
    taskPopUp.appendChild(taskPriority);

    let closeBtn = document.createElement("button");
    closeBtn.classList.add("taskPopUpCloseBtn")
    closeBtn.textContent = "X";
    taskPopUp.appendChild(closeBtn);

    closeBtn.addEventListener("click", () => {
        taskPopUp.remove();
    });

    taskDisplay.appendChild(taskPopUp);
   
}

export { renderTaskDetailsPopUp };