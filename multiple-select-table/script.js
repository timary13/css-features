const table = document.querySelector('#table');

table.addEventListener('click', (event) => {
    event.target.classList.toggle('selected');
    const button = event.target.dataset.selector;
    const toggleSelected = button => button.classList.toggle('selected');
    switch (button) {
        case 'left':
            const left_buttons = document.querySelectorAll('[data-align="left"]');
            left_buttons.forEach(toggleSelected);
            break;
        case 'center':
            const center_buttons = document.querySelectorAll('[data-align="center"]');
            center_buttons.forEach(toggleSelected);
            break;
        case 'right':
            const right_buttons = document.querySelectorAll('[data-align="right"]');
            right_buttons.forEach(toggleSelected);
            break;
        case 'start':
            const start_buttons = document.querySelectorAll('[data-justify="start"]');
            start_buttons.forEach(toggleSelected);
            break;
        case 'middle':
            const middle_buttons = document.querySelectorAll('[data-justify="middle"]');
            middle_buttons.forEach(toggleSelected);
            break;
        case 'end':
            const end_buttons = document.querySelectorAll('[data-justify="end"]');
            end_buttons.forEach(toggleSelected);
            break;
        case 'all':
            const all_buttons = document.querySelectorAll('[data-justify]');
            all_buttons.forEach(toggleSelected);
            break;
        default:
            return;
    }
});