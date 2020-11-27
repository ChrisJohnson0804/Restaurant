import home from './home';
import info from './info';
import menu from './menu';


const body = document.querySelector('body');
const container = document.querySelector("#content");

const tabBar = document.createElement('div');
tabBar.setAttribute('id', 'tabs');

let tabs = [];
    for(let i=1; i<=3; i++){
        tabs[i] = document.createElement('div');
        tabs[i].setAttribute('class', 'tab');
        tabBar.appendChild(tabs[i]);
    }

const loadPage = (page) => {
    container.innerHTML = '';
    container.appendChild(page);
}

const header = document.createElement('h1');
header.textContent = "Billy Bob's Bayou Boat Breakfast Buffet";

body.insertBefore(header, container);
body.insertBefore(tabBar, container);

tabs[1].textContent = "Home";
    tabs[1].addEventListener('click', () => {
        loadPage(home);
    });

tabs[2].textContent = "Menu";
    tabs[2].addEventListener('click', () => {
        loadPage(menu);
    });

tabs[3].textContent = "Info";
    tabs[3].addEventListener('click', () => {
        loadPage(info);
    });

loadPage(home);