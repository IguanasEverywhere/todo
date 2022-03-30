let projectArray = [];

const pushToProjectArray = (newProject) => {
    projectArray.push(newProject);
    console.log(projectArray);
}

export { pushToProjectArray, projectArray};