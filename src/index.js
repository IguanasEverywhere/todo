import './style.css';
import { renderInputForm } from './renderInputForm';



const addNewItemButton = document.createElement("button");
addNewItemButton.textContent = "Click Here To Add a New Item";
const content = document.getElementById("content");
content.appendChild(addNewItemButton);

addNewItemButton.addEventListener("click", () => {
    renderInputForm();
});






