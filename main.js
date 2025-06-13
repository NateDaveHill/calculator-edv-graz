const buttons = document.querySelectorAll('.card-button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const input = document.querySelector('.card-input');
        if (button.dataset.numeric) {
            input.value += button.dataset.numeric;
        }
        console.log(input.value);
        
    });
});