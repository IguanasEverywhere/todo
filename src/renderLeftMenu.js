import checkMark from "./greenCheck.png";
import { renderAllTasks } from "./renderAllTasks";
import { deleteProject } from "./deleteProject";
import { renderProjectButtons } from "./renderProjectButtons";
import { saveProjects } from "./saveProjects";

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
    addProjectBtn.addEventListener("click", () => {
        while (projectBtnHolder.firstChild) {
            projectBtnHolder.removeChild(projectBtnHolder.firstChild);
        }
        renderProjectButtons();
        saveProjects();
    });

    const allProjectsBtn = document.createElement("button");
    allProjectsBtn.textContent = "View All Tasks From All Projects";
    allProjectsBtn.classList.add("allProjectsBtn");
    leftMenu.appendChild(allProjectsBtn);
    allProjectsBtn.addEventListener("click", () => {
        renderAllTasks();
    });

    const deleteProjectBtn = document.createElement("button");
    deleteProjectBtn.textContent = "Delete A Project From Workspace";
    deleteProjectBtn.classList.add("allProjectsBtn");
    leftMenu.appendChild(deleteProjectBtn);

    deleteProjectBtn.addEventListener("click", () => {
        deleteProject();

    });


    let projectBtnHolder = document.createElement("div");
    projectBtnHolder.setAttribute("id", "projectBtnHolder");
    leftMenu.appendChild(projectBtnHolder);
}




export { renderLeftMenu };