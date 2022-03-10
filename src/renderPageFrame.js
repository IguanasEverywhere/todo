import { makeProject } from './makeProject';

const arrayOfProjects = [];

const renderPageFrame = () => {
    const content = document.getElementById("content");

    const pageBody = document.createElement("div");
    pageBody.classList.add("pageBody");
    content.appendChild(pageBody);

    const leftSide = document.createElement("div");
    leftSide.classList.add("leftSide");
    pageBody.appendChild(leftSide);

    const rightSide = document.createElement("div");
    rightSide.classList.add("rightSide");
    pageBody.appendChild(rightSide);


    const menuBar = document.createElement("div");
    menuBar.classList.add("menuBar");
    leftSide.appendChild(menuBar);

    const currentProjectName = document.createElement("h1");
    currentProjectName.classList.add("currentProjectName")
    currentProjectName.textContent = "All Tasks";
    rightSide.appendChild(currentProjectName);

    const addProjectBtn = document.createElement("button");
    addProjectBtn.classList.add("addProjectBtn");
    addProjectBtn.textContent = "Add a Project";
    menuBar.appendChild(addProjectBtn);

    addProjectBtn.addEventListener("click", () => {
        let projectName = prompt("Enter New Project Name:");
        let selectedProject = makeProject(projectName);
        arrayOfProjects.push(selectedProject);
        console.log(arrayOfProjects);
    });


    const projectList = document.createElement("div");
    projectList.classList.add("projectList");
    menuBar.appendChild(projectList);

    // let addTaskButton = document.createElement("button");
    // addTaskButton.textContent = "Add Task To This Project";
    // rightSide.appendChild(addTaskButton);

}
  
export { renderPageFrame };

