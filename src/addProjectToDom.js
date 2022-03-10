
const addProjectToDom = (projectName) => {
    let projectList = document.getElementsByClassName("projectList")[0];
    let projectListItem = document.createElement("button");
    projectListItem.textContent = projectName;
    projectList.appendChild(projectListItem);

    projectListItem.addEventListener("click", () => {
        let currentProjectName = document.getElementsByClassName("currentProjectName")[0];
        currentProjectName.textContent = projectName;

    });

    let addTaskButton = document.createElement("button");
    addTaskButton.textContent = "Add Task To " + projectName;
    let rightSide = document.getElementsByClassName("rightSide")[0];
    rightSide.appendChild(addTaskButton);
}

export {addProjectToDom};