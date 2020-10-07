const table = document.querySelector('#table');

table.addEventListener('click', (event) => {
    event.preventDefault();
    const button = event.target.dataset.selector;
    const toggleSelected = button => button.classList.toggle('selected');
    const removeSelected = button => button.classList.remove('selected');
    const setHiddenInputValue = () => {
        const hiddenInput = document.querySelector('#location');
        const selectedButtons = Array.from(document.querySelectorAll('.selected'));
        const selectedNumbers = selectedButtons.map(item => item.innerHTML);
        hiddenInput.setAttribute('value', selectedNumbers.join('&'));
    };
    const deSelectAllButtons = () => {
        const buttons = document.querySelectorAll('[data-align]');
        buttons.forEach(removeSelected);
    }
    switch (button) {
        case 'left':
            deSelectAllButtons();
            const left_buttons = document.querySelectorAll('[data-align="left"]');
            left_buttons.forEach(toggleSelected);
            break;
        case 'center':
            deSelectAllButtons();
            const center_buttons = document.querySelectorAll('[data-align="center"]');
            center_buttons.forEach(toggleSelected);
            break;
        case 'right':
            deSelectAllButtons();
            const right_buttons = document.querySelectorAll('[data-align="right"]');
            right_buttons.forEach(toggleSelected);
            break;
        case 'start':
            deSelectAllButtons();
            const start_buttons = document.querySelectorAll('[data-justify="start"]');
            start_buttons.forEach(toggleSelected);
            break;
        case 'middle':
            deSelectAllButtons();
            const middle_buttons = document.querySelectorAll('[data-justify="middle"]');
            middle_buttons.forEach(toggleSelected);
            break;
        case 'end':
            deSelectAllButtons();
            const end_buttons = document.querySelectorAll('[data-justify="end"]');
            end_buttons.forEach(toggleSelected);
            break;
        case 'all':
            deSelectAllButtons();
            const all_buttons = document.querySelectorAll('[data-justify]');
            all_buttons.forEach(toggleSelected);
            break;
        default:
            event.target.classList.toggle('selected');
            event.target.value = (event.target.value ? '' : button);
            break;
    }

    setHiddenInputValue();
});