import './index.css';

const foot = document.querySelector('.foot');
const buttonSelectAll = document.querySelector('.selectAll');
const buttonSelectNothing = document.querySelector('.selectNothing');

foot.addEventListener('click', function (event) {
    const activePart = event.target;
    activePart.classList.toggle('active');
});

buttonSelectAll.addEventListener('click', function (event) {
    const allParts = document.querySelectorAll('.part');
    allParts.forEach(part => {
        part.classList.add('active');
    });
});

buttonSelectNothing.addEventListener('click', function (event) {
    const allParts = document.querySelectorAll('.part');
    allParts.forEach(part => {
        part.classList.remove('active');
    });
});
