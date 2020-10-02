export function createDiv(className, id = '') {
    const div = document.createElement('div');
    div.className = className;
    if(id !== '') {
        div.setAttribute('id', id);
    }
    return div;
};


export function setValueSelect(select, value) {
    select.value = value;
    const checkedNode = document.querySelector(`.select-items .item[value=${value}]`);
    checkedNode.classList.toggle('active');
}

export function createSelect(id) {
    const select = document.createElement('input');
    select.setAttribute('id', id);
    return select;
};

function createOption({ title, image_url }) {
    const option = createDiv('item');
    option.setAttribute('value', title);
    const image = document.createElement('img');
    image.src = image_url;
    image.alt = title;
    const simplyText = document.createTextNode(title);
    option.append(image, simplyText);
    return option;
}

const removeActiveSelect = () => {
    const active = document.querySelector('.select-items .item.active');
    if(active) active.classList.remove('active');
};

export function createSelectTable(select, items) {
    const container = createDiv('select-items');
    items.forEach(item => {
        const div = createOption(item);
        container.appendChild(div);
    });
    container.addEventListener('click', function (event) {
        const checked = event.target.getAttribute('alt') || event.target.getAttribute('value');
       console.log(checked);

        document.getElementById('mySelect').value = checked;
        const checkedNode = document.querySelector(`.select-items .item[value=${checked}]`);
        removeActiveSelect();
        checkedNode.classList.toggle('active');

        const element = document.getElementsByClassName('select-items');
        element[0].classList.toggle('open');
    });
    select.parentNode.appendChild(container);
}