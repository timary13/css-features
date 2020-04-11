import "./index.css";

const btn = document.getElementsByClassName('menu-btn')[0];
const menu = document.getElementsByClassName('menu')[0];

const eventClick = btn.addEventListener('click', function (e) {
    e.preventDefault();
    btn.classList.toggle('menu-btn_active');
    menu.classList.toggle('menu_active');
});


const eventLinkClick = menu.addEventListener('click', function (e) {
    e.preventDefault();
});