import './styles/index.css';
import './styles/menu-btn.css';

const menu_btn = document.getElementsByClassName('menu-btn')[0];
const menu = document.getElementsByClassName('menu')[0];
const content = document.getElementsByClassName('content')[0];
const menu_btn_burger = document.getElementsByClassName('menu-btn-burger')[0];

const openMenuEvent = menu_btn.addEventListener('click', function (e) {
    e.preventDefault();
    menu.classList.toggle('menu-active');
    content.classList.toggle('content-active');
    menu_btn_burger.classList.toggle('menu-btn-burger-active');
});