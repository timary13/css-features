import "./styles/index.css";
import './styles/burger-btn.css';
import './styles/right-gorizontal-menu.css';
import './styles/right-vertical-menu.css';

const btns = document.getElementsByClassName('menu-btn');
const menu = document.getElementsByClassName('menu');

 for(let i = 0; i < btns.length; i++) {
    console.log('btn');
    const eventClick = btns[i].addEventListener('click', function (e) {
        e.preventDefault();
        btns[i].classList.toggle('menu-btn_active');
        menu[i].classList.toggle('menu_active');
    });

     const eventLinkClick = menu[i].addEventListener('click', function (e) {
         e.preventDefault();
     });
}
