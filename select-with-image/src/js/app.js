import '../index.css';
import * as CreateDom from './createDom';
import { items } from '../items';

const select = CreateDom.createSelect('mySelect');
const div = CreateDom.createDiv('selector');
div.appendChild(select);
document.body.append(div);
CreateDom.createSelectTable(select, items);
select.focus();

select.addEventListener('click', function () {
   const element = document.getElementsByClassName('select-items');
   element[0].classList.toggle('open');
});

