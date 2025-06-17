let currentInput = ''; 
let currentOperator = '';
let result = 0;

const buttons = document.querySelectorAll('.card-button');

buttons.forEach(button => {
    button.addEventListener('click', () => handleButtonClick(button));
});

function handleButtonClick(button) {
    const input = document.querySelector('.card-input');

    if (button.dataset.numeric) {
        handleNumericInput(button.dataset.numeric, input);
    } else if (button.dataset.operator === 'ac') {
        resetCalculator(input);
    } else if (button.dataset.operator === '=') {
        handleEquals(input);
    } else {
        handleOperator(button.dataset.operator, input);
    }
}

function handleNumericInput(value, input) {
    if (value === '.' && currentInput.includes('.')) {
        return; 
    }
    currentInput += value;
    input.value = currentInput;
}

function resetCalculator(input) {
    input.value = '';
    currentInput = '';
    currentOperator = '';
    result = 0;
}

function handleEquals(input) {
    if (currentOperator && currentInput) {
        result = calculate(result, currentInput, currentOperator);
        input.value = result;
        currentInput = ''; 
        currentOperator = ''; 
    }
}

function handleOperator(operator, input) {
    if (currentOperator && currentInput) {
        result = calculate(result, currentInput, currentOperator);
        input.value = result;
    } else if (!currentOperator) {
        result = parseFloat(currentInput) || 0;
    }
    currentInput = ''; 
    currentOperator = operator; 
}


function calculate(numOne, numTwo, operator) {
    const num1 = parseFloat(numOne);
    const num2 = parseFloat(numTwo);

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return num2; 
        }

}
