const renderTaskDisplay = () => {
    const content = document.getElementById("content");

    const taskDisplay = document.createElement("div");
    taskDisplay.setAttribute("id", "taskDisplay");

    taskDisplay.textContent = "Task Display Placeholder";

    content.appendChild(taskDisplay);
}

export { renderTaskDisplay };