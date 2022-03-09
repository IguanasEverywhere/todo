
import { defaultProject } from "./projects";

const renderProject = () => {
    defaultProject.forEach(item => {
        let content = document.getElementById("content");
        let entry = document.createElement("div");
        content.appendChild(entry);

        let title = document.createElement("li");
        title.textContent = item.title;
        entry.appendChild(title);

    });
}

export { renderProject };