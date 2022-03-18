import { projectArray } from "./pushProjectToArray";
import { changeCurrentProject } from "./changeCurrentProject";
import { renderAllTasks } from "./renderAllTasks";


const deleteProject = (projectName) => {

    let leftMenu = document.getElementById("leftMenu");
    const deleteMenu = document.createElement("div");
    deleteMenu.setAttribute("id", "deleteMenu");
    deleteMenu.style.display = "flex";

    const projectButtons = document.getElementsByClassName("projectNameBtn");
    let projectButtonsArray = Array.from(projectButtons);
    projectButtonsArray.forEach(btn => {
        let btnForDelete = document.createElement("button");
        btnForDelete.textContent = btn.textContent;
        deleteMenu.appendChild(btnForDelete);

        btnForDelete.addEventListener("click", () => {
            let projToDelete = projectArray.indexOf(projectArray.find(element => element.projectName === btnForDelete.textContent));
            console.log("INDEX IS " + projToDelete);
            projectArray.splice(projToDelete, 1);
            console.log("PROJECT ARRAY IS " + projectArray);
            deleteMenu.style.display = "none";

            while (projectBtnHolder.firstChild) {
                projectBtnHolder.removeChild(projectBtnHolder.firstChild);
            }

            projectArray.forEach(project => {
                let projectNameBtn = document.createElement("button");
                projectNameBtn.classList.add("projectNameBtn");
                projectNameBtn.textContent = project.projectName;
                projectBtnHolder.appendChild(projectNameBtn);
                projectNameBtn.addEventListener("click", () => {
                    changeCurrentProject(project.projectName);
                });
            });
            renderAllTasks();
        });
    });


    leftMenu.appendChild(deleteMenu);

}

export { deleteProject };