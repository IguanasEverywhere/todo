import { makeProject } from "./makeProject";
import { changeCurrentProject } from "./changeCurrentProject";
import { pushToProjectArray } from "./pushProjectToArray";

const renderLeftMenu = () => {
    const content = document.getElementById("content");

    const leftMenu = document.createElement("div");
    leftMenu.setAttribute("id", "leftMenu");

    leftMenu.textContent = "Left Menu Placeholder";

    content.appendChild(leftMenu);

    const addProjectBtn = document.createElement("button");
    addProjectBtn.textContent = "Add Project To WorkSpace";
    leftMenu.appendChild(addProjectBtn);
    addProjectBtn.addEventListener("click",() => {
        let projectName = prompt("What is the project named?");
        pushToProjectArray(makeProject(projectName));
        let projectNameBtn = document.createElement("button");
        projectNameBtn.textContent = projectName;
        leftMenu.appendChild(projectNameBtn);
        projectNameBtn.addEventListener("click", () => {
            changeCurrentProject(projectName);
        });
    });
}




export { renderLeftMenu };