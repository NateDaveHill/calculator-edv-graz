let firstInput = '';
let firstNumber = '';
let currentOperator = '';
let secondNumber = '';
let result = 0;

const buttons = document.querySelectorAll('.card-button');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const input = document.querySelector('.card-input');

        if (button.dataset.numeric) {
            input.value += button.dataset.numeric;
            firstInput += button.dataset.numeric;
        } else if (button.dataset.operator === 'ac') {
            input.value = '';
            firstNumber = '';
            secondNumber = '';
            currentOperator = '';
            result = 0;
        } else if (button.dataset.operator === '=') {
            secondNumber = input.value;
            switch (currentOperator) {
                case '+':
                    result = Number(firstNumber) + Number(secondNumber);
                    break;
                case '-':
                    result = Number(firstNumber) - Number(secondNumber);
                    break;
                case '*':
                    result = Number(firstNumber) * Number(secondNumber);
                    break;
                case '/':
                    result = Number(firstNumber) / Number(secondNumber);
                    break;
            }
            input.value = result;
            firstNumber = '';
            secondNumber = '';
            currentOperator = '';
        } else {
            firstNumber = input.value;
            currentOperator = button.dataset.operator;
            input.value = '';
        }
    });
});