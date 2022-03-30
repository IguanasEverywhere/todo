import { pushToProjectArray } from "./pushProjectToArray";
import { changeCurrentProject } from "./changeCurrentProject";
import { makeProject } from "./makeProject";
import { projectArray } from "./pushProjectToArray";
import { saveProjects } from "./saveProjects";

const renderProjectButtons = () => {
    let projectName;

    let newProjectDiv = document.createElement("div");
    newProjectDiv.classList.add("newProjectDiv");
    leftMenu.appendChild(newProjectDiv);

    let projectNameInput = document.createElement("input");
    projectNameInput.setAttribute("placeholder", "New Project Name");
    projectNameInput.style.textAlign = "center";
    projectNameInput.setAttribute("maxlength", "12");
    newProjectDiv.appendChild(projectNameInput);
    let projectNameInputSubmitBtn = document.createElement("button");
    projectNameInputSubmitBtn.textContent = "Create New Project";
    projectNameInputSubmitBtn.classList.add("addProjectBtn");
    newProjectDiv.appendChild(projectNameInputSubmitBtn);

    projectNameInputSubmitBtn.addEventListener("click", () => {
        projectName = projectNameInput.value;
        pushToProjectArray(makeProject(projectName));
        newProjectDiv.remove();

        projectArray.forEach(project => {
            let projectNameBtn = document.createElement("button");
            projectNameBtn.classList.add("projectNameBtn");
            projectNameBtn.textContent = project.projectName;
            projectBtnHolder.appendChild(projectNameBtn);
            projectNameBtn.addEventListener("click", () => {
                changeCurrentProject(project.projectName);
            });
        });

        saveProjects();
    });
}

export { renderProjectButtons };
