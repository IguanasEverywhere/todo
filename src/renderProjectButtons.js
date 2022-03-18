import { pushToProjectArray } from "./pushProjectToArray";
import { changeCurrentProject } from "./changeCurrentProject";
import { makeProject } from "./makeProject";
import { projectArray } from "./pushProjectToArray";

const renderProjectButtons = () => {
    let projectName = prompt("What is the project named?");
    
    pushToProjectArray(makeProject(projectName));

    projectArray.forEach(project => {
        let projectNameBtn = document.createElement("button");
        projectNameBtn.classList.add("projectNameBtn");
        projectNameBtn.textContent = project.projectName;
        projectBtnHolder.appendChild(projectNameBtn);
        projectNameBtn.addEventListener("click", () => {
            changeCurrentProject(project.projectName);
        });
    });

}

export { renderProjectButtons };
