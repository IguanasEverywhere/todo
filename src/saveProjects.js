import { projectArray } from "./pushProjectToArray";

const saveProjects = () => {

    localStorage.clear();

    let projects = [];

    projectArray.forEach(project=> {

        console.log(project.projectName);
        console.log(project.taskArray);
     
        let projectToSave = {
            projectName : project.projectName,
            taskArray: project.taskArray
        };
        projects.push(projectToSave);

    });




    projects = JSON.stringify(projects);
    localStorage.setItem("projectNamesArray", projects);

}

export { saveProjects };