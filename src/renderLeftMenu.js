import { makeProject } from "./makeProject";
import { changeCurrentProject } from "./changeCurrentProject";
import { pushToProjectArray } from "./pushProjectToArray";
import checkMark from "./greenCheck.png";
import { renderAllTasks } from "./renderAllTasks";

const renderLeftMenu = () => {
    const content = document.getElementById("content");

    const leftMenu = document.createElement("div");
    leftMenu.setAttribute("id", "leftMenu");

    const websiteTitleLogo = document.createElement("div");
    websiteTitleLogo.classList.add("websiteTitleLogo");
    websiteTitleLogo.textContent = "To-Do List";
    leftMenu.appendChild(websiteTitleLogo);

    const check = new Image();
    check.src = checkMark;
    check.classList.add("check");
    leftMenu.appendChild(check); // may revisit this image src

    content.appendChild(leftMenu);

    const addProjectBtn = document.createElement("button");
    addProjectBtn.classList.add("addProjectBtn");
    addProjectBtn.textContent = "Add Project To WorkSpace";
    leftMenu.appendChild(addProjectBtn);
    addProjectBtn.addEventListener("click",() => {
        let projectName = prompt("What is the project named?");
        pushToProjectArray(makeProject(projectName));
        let projectNameBtn = document.createElement("button");
        projectNameBtn.classList.add("projectNameBtn");
        projectNameBtn.textContent = projectName;
        leftMenu.appendChild(projectNameBtn);
        projectNameBtn.addEventListener("click", () => {
            changeCurrentProject(projectName);
        });
    });

    const allProjectsBtn = document.createElement("button");
    allProjectsBtn.textContent = "View All Tasks From All Projects";
    allProjectsBtn.classList.add("allProjectsBtn");
    leftMenu.appendChild(allProjectsBtn);
    allProjectsBtn.addEventListener("click", () => {
        renderAllTasks();
    });
}




export { renderLeftMenu };