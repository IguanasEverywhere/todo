import { addProjectToDom } from "./addProjectToDom";

const makeProject = (projectName) => {
    let arrayOfTasks = [];
    addProjectToDom(projectName);
    return { projectName, arrayOfTasks };
}

export { makeProject };