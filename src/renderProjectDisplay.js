const renderProjectDisplay = () => {
    const content = document.getElementById("content");

    const projectDisplay = document.createElement("div");
    projectDisplay.setAttribute("id", "projectDisplay");

    content.appendChild(projectDisplay);

}

export { renderProjectDisplay};