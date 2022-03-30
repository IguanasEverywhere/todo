import { pushToProjectArray } from "./pushProjectToArray";
import { changeCurrentProject } from "./changeCurrentProject";
import { makeProject } from "./makeProject";
import { projectArray } from "./pushProjectToArray";
import { saveProjects } from "./saveProjects";

const renderProjectButtons = () => {
    let projectName;

    let projectNameInput = document.createElement("input");
    projectNameInput.setAttribute("placeholder", "Enter New Project Name");
    projectNameInput.style.visibility = "visible";
    leftMenu.appendChild(projectNameInput);
    let projectNameInputSubmitBtn = document.createElement("button");
    projectNameInputSubmitBtn.textContent = "Create New Project";
    projectNameInputSubmitBtn.style.visibility = "visible";
    projectNameInputSubmitBtn.style.display="block";

    leftMenu.appendChild(projectNameInputSubmitBtn);

    projectNameInputSubmitBtn.addEventListener("click", () => {
        projectName = projectNameInput.value;
        pushToProjectArray(makeProject(projectName));
        projectNameInput.style.visibility = "hidden";
        projectNameInputSubmitBtn.style.visibility = "hidden";
        projectNameInput.style.display = "none";
        projectNameInputSubmitBtn.style.display="none";

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
