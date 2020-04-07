import "./index.css";

const container = document.getElementsByClassName('container')[0];
container.addEventListener('click', function () {
   container.classList.toggle('container-zero');
});