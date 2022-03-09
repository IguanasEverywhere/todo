import { defaultProject } from "./projects";

const renderProject = () => {
    let content = document.getElementById("content");

    const entries = document.getElementsByClassName("entry");
    while (entries.length > 0) {
        entries[0].parentNode.removeChild(entries[0]);
    }


    let entryHolder = document.createElement("div");
    content.appendChild(entryHolder);
    entryHolder.classList.add("entryHolder");

    defaultProject.forEach(item => {
        let entry = document.createElement("div");
        entry.classList.add("entry");
        entryHolder.appendChild(entry);


        let title = document.createElement("li");
        title.textContent = item.title;
        entry.appendChild(title);

        let description = document.createElement("li");
        description.textContent = item.description;
        entry.appendChild(description);

        let dueDate = document.createElement("li");
        dueDate.textContent = item.dueDate;
        entry.appendChild(dueDate);

        let priority = document.createElement("li");
        priority.textContent = item.priority;
        entry.appendChild(priority);

    });
}

export { renderProject };