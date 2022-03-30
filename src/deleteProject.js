import { projectArray } from "./pushProjectToArray";
import { changeCurrentProject } from "./changeCurrentProject";
import { renderAllTasks } from "./renderAllTasks";
import { saveProjects } from "./saveProjects";


const deleteProject = (projectName) => {

    let leftMenu = document.getElementById("leftMenu");
    const deleteMenu = document.createElement("div");
    deleteMenu.setAttribute("id", "deleteMenu");

    const deleteMessage = document.createElement("h5");
    deleteMessage.textContent = "Which Projects Would You Like to Delete?";
    deleteMenu.appendChild(deleteMessage);

    const projectButtons = document.getElementsByClassName("projectNameBtn");
    let projectButtonsArray = Array.from(projectButtons);
    projectButtonsArray.forEach(btn => {
        let btnForDelete = document.createElement("button");
        btnForDelete.classList.add("projectNameBtn");
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

            while (deleteMenu.firstChild) {
                deleteMenu.removeChild(deleteMenu.firstChild);
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
            saveProjects();
            renderAllTasks();
        });
    });


    leftMenu.appendChild(deleteMenu);

}

export { deleteProject };