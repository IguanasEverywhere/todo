import { makeProject } from "./makeProject";
import { pushToProjectArray } from "./pushProjectToArray";
import { projectArray } from "./pushProjectToArray";
import { changeCurrentProject } from "./changeCurrentProject";


const loadProjects = () => {

    let parsedProjects = JSON.parse(localStorage.getItem("projectNamesArray"));
    if (parsedProjects) {
        parsedProjects.forEach(project => {
            pushToProjectArray(makeProject(project.projectName));
        });


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
}

export { loadProjects };