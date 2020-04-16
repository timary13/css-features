import './index.css';

const menu_btn = document.getElementsByClassName('menu-btn')[0];
const menu = document.getElementsByClassName('menu')[0];
const content = document.getElementsByClassName('content')[0];

const openMenuEvent = menu_btn.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.toggle('menu-active');
    content.classList.toggle('content-active');
});