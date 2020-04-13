import "./styles/index.css";
import './styles/burger-btn.css';
import './styles/right-gorizontal-menu.css';
import './styles/right-vertical-menu.css';
import './styles/icon-menu.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';

const btns = document.getElementsByClassName('menu-btn');
const menu = document.getElementsByClassName('menu');
const menu_icon = document.getElementsByClassName('menu-icon')[0];

 for(let i = 0; i < btns.length; i++) {
    const eventClick = btns[i].addEventListener('click', function (e) {
        e.preventDefault();
        btns[i].classList.toggle('menu-btn_active');

        if(i < 2) {
            menu[i].classList.toggle('menu_active');}
        else {
            menu_icon.classList.toggle('active');
        }
    });

     const eventLinkClick = menu[i].addEventListener('click', function (e) {
         e.preventDefault();
     });
}
