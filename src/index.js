import './style.css';
import { renderLeftMenu } from './renderLeftMenu';
import { renderProjectDisplay } from './renderProjectDisplay';
import { renderTaskDisplay } from './renderTaskDisplay';
import { loadProjects } from './loadProjects';



renderLeftMenu();
renderProjectDisplay();
renderTaskDisplay();

loadProjects();

