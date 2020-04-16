import './index.css';

const envelope = document.getElementsByClassName('envelope')[0];
const envelope_top = document.getElementsByClassName('envelope__top')[0];
const paper = document.getElementsByClassName('paper')[0];

const clickEnvelopeEvent = envelope.addEventListener('click', function () {
    paper.classList.toggle('close');
    envelope_top.classList.toggle('close');
});